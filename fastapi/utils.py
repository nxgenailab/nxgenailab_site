from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from models import FormData
import os
import base64
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage


# Google Sheets API setup (Service Account)
SHEET_ID = '1fsUVSKD-t9ynB22oIGtP5uFbfzt_NCKs8LV1nYOYVYs'  # Replace with your Google Sheets ID
RANGE = 'Sheet1!A:B'  # Adjust range as needed

# Load the credentials from your downloaded JSON key
# SERVICE_ACCOUNT_FILE = 'sa.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']


def get_decoded_secret():
    encoded = os.getenv("ENCODED_SECRET")
    if not encoded:
        raise ValueError("ENCODED_SECRET environment variable is not set")

    try:
        decoded_bytes = base64.b64decode(encoded)
        decoded_str = decoded_bytes.decode('utf-8')
        return decoded_str
    except Exception as e:
        raise ValueError(f"Failed to decode ENCODED_SECRET: {e}")


# Authenticate with Google Sheets API
def get_sheets_service():
    decoded_json = get_decoded_secret()
    creds = Credentials.from_service_account_info(
        eval(decoded_json), scopes=SCOPES)
    return build('sheets', 'v4', credentials=creds)


async def send_email(data):
        # Send email notification using Godaddy SMTP
    print("Sending email...")
    try:
        msg = MIMEMultipart()
        msg.set_unixfrom('author')
        msg['From'] = 'info@nxgenailab.com' 
        msg['To'] = data.email
        if not data.email:
            raise ValueError("Email address is required")
        msg['Reply-To'] = 'info@nxgenailab.com'
        msg['Subject'] = 'You’re In! 🚀 Get Ready for the  NxGen AI Roadmap Webinar'
        
        # Alternative part for HTML
        msg_alt = MIMEMultipart('alternative')
        msg.attach(msg_alt)

        with open("mail.html", "r") as f:
            message = f.read().replace("{name}", data.name if data.name else "")

        msg.attach(MIMEText(message, 'html'))

        with open("Logo.png", "rb") as img_file:
            img = MIMEImage(img_file.read())
            img.add_header('Content-ID', '<logo_image>')
            img.add_header('Content-Disposition', 'inline', filename="Logo.png")
            msg.attach(img)

        server = smtplib.SMTP("smtp.office365.com", 587)
        server.starttls()
        response = server.login(msg['From'], "Kadnam#b1")
        if response[0] == 235:
            print("Login successful!")
        else:
            print(f"Login failed: {response}")
        server.sendmail(msg['From'], msg['To'], msg.as_string())
        server.quit()
        print("Email sent successfully!")

    except smtplib.SMTPServerDisconnected as e:
        print(f"SMTPServerDisconnected: {e}")
    except smtplib.SMTPAuthenticationError as e:
        print(f"SMTPAuthenticationError: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")


async def save_to_google_sheets(data: FormData):
    service = get_sheets_service()
    values = [[
        data.name,
        data.email,
        data.phone,
        data.age,
        data.occupation,
        data.city,
        data.aiFamiliarity,
        data.aiInterest,
        ",".join(data.aiTopics) if data.aiTopics else None,
    ]]

    request = service.spreadsheets().values().append(
        spreadsheetId=SHEET_ID,
        range=RANGE,
        valueInputOption="RAW",
        insertDataOption="INSERT_ROWS",
        body={"values": values}
    )
    
    response = request.execute()
    print("Data saved to Google Sheets successfully!")
    return response
