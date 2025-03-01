# JivaCalendar

JivaCalendar_Ecliptic.py is the backend file. It contains core calculations etc. Note that the word 'ecliptic' in the name imples that the ecliptic plane is treated as one of the coordinate planes. Thus, longitudes are measured in the ecliptic plane, and the latitude planes are parallel to it. The results change if we use any other plane, e.g. the equatorial plane of the Earth. The function names in this file end in ```_Ec``` to emphasize this.

JivaCalendar_FrontEnd.py contains high level functions that you may want to use. Using the front end functions should be intuitive, 
and please let me know if it is not, so I can imporve it. We need to add functions to this file according to what Kamal Tyagi Maharaja says.

Look at Example.ipynb

Note: The code is almost complete. Usage example:

```python
import JivaCalendar_FrontEnd as jcf
# lat and lon are both being in degrees. North is positive and East is positive.
cal = jcf.Pancanga(date=(2024,12,9),time=(14,0,0),latitude=51.5,longitude=00.00) # Todo: To support NON-UTC locations
month_data = cal.get_pancanga_gregorian_month_Ec(verbose=True)
```

You can change the accuracy of the compute by ```accuracy``` parameter. This parameter is the error value in degrees that we tolerate. For example, ```accuracy=0.01``` would mean that the tithi starting time (and all other calculations) are computed with the locations of the moon coming within 0.01 degrees of the actual correct position.

Ayanamsa is the difference between sidereal and synodic zodiac. This difference occurs because of the precession of the Earth's axis. The value of ayanamsa changes at the rate of about 1 degree every 72 years.

The ```ayanamsa``` can be a string ('citrapaksa', 'revati' etc.) or a floating point number. If ```ayanamsa='citrapaksa'```, the ayanamsa is 180 degrees from the longitude of the star Citra (Spica). Similarly, ```ayanamsa='revati'``` sets the ayanamsa at the location of Revati (Zeta Piscium A). Specifying a floating point value sets the ayanamsa to be that value in degrees at J2000, i.e. 1 Jan, 2000. 
 


Steps to run the application:

1. From frontend, run "npm run dev" 
2. Navigate through: http://localhost:5173/
3. On the other terminal, move to backend folder,
4. Run uvicorn main:app --reload


To Do's for Utkarsh

1. Check extensively for solve_moon_time_Ec(lon,t) and find_new_moon_time_Ec(t). Delete if not found anywhere.
2. Add more timezones

Cheers! Radhe!


