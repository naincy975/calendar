import pickle
import os

from fastapi import FastAPI
import JivaCalendar_FrontEnd as jcf
import hvv 
import General_Vrata as gv
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React app URL during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gets Ekadashi vratas in a particular month
@app.get("/month_vrata")
async def month_vrata(year: int, month: int, latitude: float, longitude: float):
    data = hvv.get_month_vrata(year, month, latitude, longitude)
    return data

# Gets Ekadashi vratas in a particular year
@app.get("/year_vrata")
async def year_vrata(year: int, latitude: float, longitude: float):
    data = hvv.get_year_vrata(year, latitude, longitude)
    return data

# Gets the month-panjika
@app.get("/month_panjika")
async def month_panjika(year: int, month: int, latitude: float, longitude: float):
    data = jcf.get_month_data(year, month, latitude, longitude)
    return data

# Gets the year-panjika
@app.get("/year_panjika")
async def year_panjika(year: int, latitude: float, longitude: float):
    data = jcf.get_year_data(year, latitude, longitude)
    return data

# Gets the special vratas in a given range of time period
@app.get("/special_vrata")
async def special_vrata():
    year_s, month_s, year_e, month_e, latitude, longitude = (
        2024,
        1,
        2024,
        12,
        27.34,
        77.40,
    )
    data = jcf.get_year_data(year_s, month_s, year_e, month_e, latitude, longitude)
    special_vratas = gv.calculate_vrata(data)
    return special_vratas


# if __name__ == "__main__":
#     year_data_file = "year_data.pickle"
#     if not os.path.isfile(year_data_file):
#         with open(year_data_file, "wb") as year_data:
#             year_s, month_s, year_e, month_e, latitude, longitude = (
#                 2024,
#                 1,
#                 2025,
#                 3,
#                 27.34,
#                 77.40,
#             )
#             data = jcf.get_year_data(
#                 year_s, month_s, year_e, month_e, latitude, longitude
#             )
#             pickle.dump(data, year_data)

#     with open(year_data_file, "rb") as year_data:
#         data = pickle.load(year_data)
#     vratas = gv.get_ekadashis(data)
#     print(vratas)
