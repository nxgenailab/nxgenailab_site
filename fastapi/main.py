from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware 
from googleapiclient.errors import HttpError
from models import FormData

import uvicorn
from utils import save_to_google_sheets, send_email


# Initialize FastAPI app
app = FastAPI()


# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a POST endpoint to handle form submission
@app.post("/submit")
async def submit_form(data: FormData):
    try:
        await save_to_google_sheets(data)

        await send_email(data)

        return {"message": "Successfully submitted!", "response": "Done"}
        
    except HttpError as err:
        raise HTTPException(status_code=500, detail=f"Google Sheets API error: {err}")
    except Exception as err:
        raise HTTPException(status_code=500, detail=str(err))



if __name__ == "__main__":
    # Run the FastAPI server
    uvicorn.run(app, host="0.0.0.0", port=3001)