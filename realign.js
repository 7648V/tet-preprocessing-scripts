//This code helps to realign the TET and EEG data by automatically outputting when each of the conditions start and end in Unix time for the cut20minutes function
//Repeat this code for each participant, changing files to an array of the appropriate file names for each participant

files = ["01_Mar_23_P06","03_Mar_23_P06","20_Feb_23_P06","26_Feb_23_P06","27_Feb_23_P06","28_Feb_23_P06"]
for (let i = 0; i < files.length; i++) {
    //Path has been changed to anonymise candidate name
    const data = require("/Users/7648V/Documents/Year 3/Project/TET Data/P06/"+files[i]+".json");
    output = ""
    output += files[i] + "\n" + "\n"

    //Divide by 4000 to get to epochs - each epoch is 4000 miliseconds
    var task_start = data[0].time_elapsed
    task_start = task_start /=4000

    var COND1_start = data[4].time_elapsed
    COND1_start /=4000
    COND1_start = COND1_start - task_start
    var COND1_end = COND1_start + 75

    var COND2_start = data[14].time_elapsed
    COND2_start /=4000
    COND2_start = COND2_start - task_start
    var COND2_end = COND2_start + 75

    var COND3_start = data[26].time_elapsed
    COND3_start /=4000
    COND3_start = COND3_start - task_start
    var COND3_end = COND3_start + 75


    var COND4_start = data[37].time_elapsed
    COND4_start /=4000
    COND4_start = COND4_start - task_start
    var COND4_end = COND4_start + 75

    output += "Condition 1 name:" + JSON.stringify(data[3].stimulus) + "\n"
    output += "Condition 1 start epoch:" + COND1_start + "\n"
    output += "Condition 1 end epoch:" + COND1_end + "\n"
    output += "\n"

    output += "Condition 2 name:" + JSON.stringify(data[14].stimulus) + "\n"
    output += "Condition 2 start epoch:" + COND2_start + "\n"
    output += "Condition 2 end epoch:" + COND2_end + "\n"
    output += "\n"
    
    output += "Condition 3 name:" + JSON.stringify(data[25].stimulus) + "\n"
    output += "Condition 3 start epoch:" + COND3_start + "\n"
    output += "Condition 3 end epoch:" + COND3_end + "\n"
    output += "\n"

    output += "Condition 4 name:" + JSON.stringify(data[36].stimulus) + "\n"
    output += "Condition 4 start epoch:" + COND4_start + "\n"
    output += "Condition 4 end epoch:" + COND4_end + "\n"
    output += "\n"

    console.log(output)
}
