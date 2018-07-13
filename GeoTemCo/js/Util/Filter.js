var dd_options;
var json_array;
var mywidgets = {};

function filterforName(json){
    json_array = json;
    var names = new Set();
    json.forEach(function(jObj){
        var name = jObj.tableContent.surname +", " +jObj.tableContent.prename;
        names.add(name);
    });
    return names;
}

function genOptions(set){
    dd_options = new Array({name: "All Instruments", onclick: selectIM});
    set.forEach(function(s){
        dd_options.push({
            name : s,
            onclick : selectIM,
        });
    });
}

function selectIM(){
    var instruments = filterforInstruments(this.name);
    var data = new Array();
    data.push(new Dataset(instruments,this.name));
    showData(data);

}

function showData(data){
    mywidgets.map.core.triggerRefining(data);
    mywidgets.time.core.triggerRefining(data);
}

function filterforInstruments(name){
    if (name === "All Instruments"){
        return json_array;
    }
    var instruments = new Array();
    json_array.forEach(function(jObj){
        var im_name = jObj.tableContent.surname +", " +jObj.tableContent.prename;
        if (im_name === name){
            instruments.push(jObj);
        }
    });
    return instruments;
}