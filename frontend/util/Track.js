  var Key = require('../components/key.jsx');

var Track = function(attributes) {
  this.trackName = attributes.trackName;
  this.roll = attributes.roll;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.recordingTime = new Date();
};

Track.prototype.addNotes = function (playingNotes) {
  var time = new Date();
  var snapShot = {
    timeSlice: (time.getTime() - this.recordingTime.getTime()),
    notes: playingNotes
  };
  this.roll.push(snapShot);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function() {
  var intervalId = setInterval(function() {

  }, 10);
  clearInterval(intervalId);
};

module.exports = Track;
