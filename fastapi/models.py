
# Define the data model for form submission
from typing import Optional

from pydantic import BaseModel


class FormData(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    age: Optional[str] = None
    occupation: Optional[str] = None
    city: Optional[str] = None
    aiFamiliarity: Optional[str] = None
    aiInterest: Optional[str] = None
    aiTopics: Optional[list] = None
