# tet-preprocessing-scripts
Contains JavaScript code for preprocessing TET and questionnaire data from the Predicting Pain study. 

**main_2.js** extracts the Y coordinates from the TET pain traces, as well as the pain types data from the questionnaires, and writes this data into CSV files.

**realign.js** uses the absolute timestamps on the TET data files to calculate the start and end epochs of each condition in each of the EEG data files. 
