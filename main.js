Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
     Webcam.snap(function (data_uri) {
          document.getElementById("result").innerHTML = '<img id="capture"src="'+data_uri+'"/>';
         });
         }
         console.log('ml5.version', ml5.version);

         var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OWHKFAK6b/model.json',modelloaded);
         function modelloaded(){
             console.log('modelloaded');
         }

         function check(){
             var img = document.getElementById("capture");
             classifier.classify(img,gotResult);
         }

         function gotResult(error,results){
             if(error){
                 console.error(error);

             }
             else{
                 console.log(results);
                 document.getElementById("result_object_name").innerHTML = results[0].label;
                 document.getElementById("result_object_accurcvy").innerHTML = results[0].confidence;

             }


         }