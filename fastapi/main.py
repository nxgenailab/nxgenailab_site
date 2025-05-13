from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
from pydantic import BaseModel
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import os

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from React app
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Define the data model for form submission
class FormData(BaseModel):
    name: str
    email: str

# Google Sheets API setup (Service Account)
SHEET_ID = '1fsUVSKD-t9ynB22oIGtP5uFbfzt_NCKs8LV1nYOYVYs'  # Replace with your Google Sheets ID
RANGE = 'Sheet1!A:B'  # Adjust range as needed

# Load the credentials from your downloaded JSON key
SERVICE_ACCOUNT_FILE = 'sa.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

# Authenticate with Google Sheets API
def get_sheets_service():
    creds = Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return build('sheets', 'v4', credentials=creds)

# Define a POST endpoint to handle form submission
@app.post("/submit")
async def submit_form(data: FormData):
    try:
        service = get_sheets_service()

        # Prepare the data to append (name, email)
        values = [[data.name, data.email]]

        # Call the Sheets API to append data
        request = service.spreadsheets().values().append(
            spreadsheetId=SHEET_ID,
            range=RANGE,
            valueInputOption="RAW",
            insertDataOption="INSERT_ROWS",
            body={"values": values}
        )

        # Execute the request
        response = request.execute()

        return {"message": "Successfully submitted!", "response": response}

    except HttpError as err:
        raise HTTPException(status_code=500, detail=f"Google Sheets API error: {err}")
    except Exception as err:
        raise HTTPException(status_code=500, detail=str(err))

if __name__ == "__main__":
    # Run the FastAPI server
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3001)