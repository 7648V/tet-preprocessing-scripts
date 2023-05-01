//Creates CSV files containing the preprocessed data from the questionnaire data
//One file is created per session for the TET pain trace data
//One file is created per session for the pain type data

const fs = require('fs')

//CHANGE FILES ACCORDING TO THE PARTICIPANT BEING PREPROCESSED
//files = ["01_Feb_23_P05","05_Dec_22_P05","07_Jan_23_P05","11_Dec_22_P05","12_Jan_23_P05","13_Dec_22_P05","14_Dec_22_P05","15_Dec_22_P05","18_Dec_22_P05","26_Jan_23_P05","30_Dec_22_P05"]
//files = ["01_Dec_22_P01","04_Dec_22_P01","06_Dec_22_P01","07_Dec_22_P01","08_Dec_22_P01","09_Dec_22_P01","12_Dec_22_P01","13_Dec_22_P01","14_Dec_22_P01","16_Nov_22_P01","17_Nov_22_P01","18_Nov_22_P01","19_Nov_22_P01","21_Nov_22_P01","22_Nov_22_P01","23_Nov_22_P01","24_Nov_22_P01","25_Nov_22_P01","29_Nov_22_P01","30_Nov_22_P01"]
files = ["01_Mar_23_P06","03_Mar_23_P06","20_Feb_23_P06","26_Feb_23_P06","27_Feb_23_P06","28_Feb_23_P06"]

for (let i = 0; i < files.length; i++) {
    //Creates a csv file for the TET coordinate data of participant P01 for a certain date
    //Path has been changed to anonymise candidate name
    const data = require("/Users/7648V/Documents/Year 3/Project/TET Data/P06/"+files[i]+".json");
    //Indexes in the JSON files corresponding to the TET pain data for conditions 1, 2, 3, 4
    conditions = [7, 18, 29, 40]
    output = ""

    for (let condition of conditions) {
        //Finds the condition names so that the randomised order of the conditions can be unrandomised
        if (condition == 7) {
            conditionname = JSON.stringify(data[3].stimulus)
          } else if (condition == 18) {
            conditionname = JSON.stringify(data[14].stimulus)
        } else if (condition == 29) {
            conditionname = JSON.stringify(data[25].stimulus)
          } else {
            conditionname = JSON.stringify(data[36].stimulus)
          }
        output += conditionname + "\n"

        //Adds the Y coordinates of the pain TET traces to the CSV file output
        for (let coordinate of data[condition].strokes[data[condition].strokes.length - 1]) {
            if (coordinate.x !== undefined) {
                output += coordinate.x + "," + coordinate.y + "\n"
            }
        }


    }
    //Writes output to the CSV file
    fs.writeFile(files[i]+"_TET"+'.csv', output, 'utf8', (err) => console.error(err))

    console.log(output)
    //Indexes in the JSON files corresponding to the pain type data for conditions 1, 2, 3, 4
    conditions = [6, 17, 28, 39]
    output = ""
    for (let condition of conditions) {
        for (let condition of conditions) {
          //Finds condition names (same as above)
            if (condition == 6) {
                conditionname = JSON.stringify(data[3].stimulus)
              } else if (condition == 17) {
                conditionname = JSON.stringify(data[14].stimulus)
            } else if (condition == 28) {
                conditionname = JSON.stringify(data[25].stimulus)
              } else {
                conditionname = JSON.stringify(data[36].stimulus)
              }
            output += conditionname + "\n"
            //Adds the pain types to the CSV file output
        output += data[condition].response.pain.join(',')+"\n"

    }
    //Writes output to the CSV file
    fs.writeFile(files[i]+"_TYPE"+'.csv', output, 'utf8', (err) => console.error(err))
    console.log(output)
}
}
