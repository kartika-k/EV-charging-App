import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby"
// const API_KEY = "AIzaSyB9ctiAb-J9CZil_ZlpAg3Z0XpxwudHlNw";

const API_KEY='https://maps.googleapis.com/maps/api/js?key=AIzaSyBcIeZUYI_x5WCKt4eBHe3GxGlifIKn2Qw&callback=FUNCTION_NAME';

const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask':['places.displayName',
    'places.formattedAddress',
    'places.location',
    'places.evChargeOptions',
    'places.shortFormattedAddress',
    'places.photos']
    }
}

const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config);

export default{
    NewNearByPlace
}

