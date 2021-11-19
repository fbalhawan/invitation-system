class DistanceController {

    /**
     * A function to calculate distance between 2 coordinates, using harvesine formula, as "the crow flies" over a sphere
     * @param sourceLongitude 
     * @param sourceLatitude 
     * @param destinationLongitude 
     * @param destinationLatitude 
     * @returns 
     */
    static calculateDistance = (sourceLongitude: number, sourceLatitude: number,
        destinationLongitude: number, destinationLatitude: number) => {


            var earthRadius = 6371; // Radius of the earth in km
            var dLat = this.degreeToRadian(destinationLatitude-sourceLatitude); 
            var dLon = this.degreeToRadian(destinationLongitude-sourceLongitude); 
            var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(this.degreeToRadian(sourceLatitude)) * Math.cos(this.degreeToRadian(destinationLatitude)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2); 

            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var distance = earthRadius * c; // Distance in km

        return Math.round(distance);
    }

    static degreeToRadian = (deg: number): number => {
        return deg * Math.PI / 180;
    }
}

export default DistanceController