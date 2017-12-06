define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c00f6a9f53ac48b2949d2e741c9ffe10: function AS_Button_c00f6a9f53ac48b2949d2e741c9ffe10(eventobject) {
        var self = this;
        this.view.folderContainer2.isVisible = true;
    },
    AS_Camera_h5adafb1b0d34f778a3ffdd36688f5a7: function AS_Camera_h5adafb1b0d34f778a3ffdd36688f5a7(eventobject) {
        var self = this;
        return imageLocation.call(this);
    },
    AS_Map_hd2e287c689448b5af6d3174a63b03f5: function AS_Map_hd2e287c689448b5af6d3174a63b03f5(eventobject) {
        var self = this;

        function successcallback(position) {
            var locationData = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            kony.application.getCurrentForm().Map0.navigateToLocation(locationData, false, false);
        }

        function errorcallback(positionerror) {
            var errorMesg = "Error code: " + positionerror.code;
            errorMesg = errorMesg + " message: " + positionerror.message;
            alert(errorMesg);
        }
        var positionoptions = {
            maximumage: 3000
        };
        // Options: retrieve the location every 3 seconds
        kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
    },
    AS_Map_f8dca6fb4793461381e2496b3ad1edc9: function AS_Map_f8dca6fb4793461381e2496b3ad1edc9(eventobject, location) {
        var self = this;
        alert();
    },
    AS_Segment_c28eb920ed08455aa3d715d8f8c9e462: function AS_Segment_c28eb920ed08455aa3d715d8f8c9e462(seguiWidget, sectionIndex, rowIndex) {
        var self = this;
    },
    AS_Segment_aeb62862a04a4c6286642599eca0a4ee: function AS_Segment_aeb62862a04a4c6286642599eca0a4ee(eventobject, x, y) {
        var self = this;
    }
});