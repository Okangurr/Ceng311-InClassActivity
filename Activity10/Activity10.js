$(document).ready(function () {
    // Birthday için datepicker
    $("#birthday").datepicker();

    // City için autocomplete
    var cities = [
        "Charlotte", "New York", "Washington DC", "Ankara", "Istanbul", "Izmir"
    ];
    $("#city").autocomplete({
        source: cities
    });

    // Programming Language için autocomplete
    var languages = [
        "JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "PHP", "Swift"
    ];
    $("#language").autocomplete({
        source: languages
    });
});
