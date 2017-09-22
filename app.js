

// var vehiclesObject = {
//     "Toyota": {
//         "Camry": ["Trim 1", "Trim 2"],
//         "Prius": ["Trim 3", "Trim 4"]
//     },
//     "Honda": {
//         "Civic": ["Trim 5", "Trim 6", "Trim 7"],
//         "Accord": ["Trim 8"]
//     },
//     "BMW" : {
//     		"3-series": ["Trim 9", "Trim 10"]
//     }
// }
//
// window.onload = function () {
//   var makeSelect = document.getElementById("makeSelect");
//   var modelSelect = document.getElementById("modelSelect");
//   var trimSelect = document.getElementById("trimSelect");
//
//
//   for (var make in vehiclesObject) {
//         makeSelect.options[makeSelect.options.length] = new Option(make, make);
//   }
//
//   makeSelect.onchange = function () {
//         trimSelect.length = 1; // remove all options bar first
//         modelSelect.length = 1; // remove all options bar first
//         if (this.selectedIndex < 1) return; // done
//         for (var model in vehiclesObject[this.value]) {
//             modelSelect.options[modelSelect.options.length] = new Option(model, model);
//         }
//   }
//   makeSelect.onchange(); // reset in case page is reloaded
//   modelSelect.onchange = function () {
//         trimSelect.length = 1; // remove all options bar first
//         if (this.selectedIndex < 1) return; // done
//         var trims = vehiclesObject[makeSelect.value][this.value];
//         for (var i = 0; i < trims.length; i++) {
//             trimSelect.options[trimSelect.options.length] = new Option(trims[i], trims[i]);
//         }
//   }
//
// };

var usedVehiclesObject = {
    makes: [
        {
            "nm": "Toyota",
            "md": [{ "nm": "Camry" }, { "nm": "Prius"} ]
        },
        {
            "nm": "Honda",
            "md": [{ "nm": "Accord" }, { "nm": "Civic"} ]
        },
        {
            "nm": "BMW",
            "md": [{ "nm": "3-Series" }]
        }
    ]
}


window.onload = function () {
  var makeSelect = document.getElementById("makeSelect");
  var modelSelect = document.getElementById("modelSelect");
  var trimSelect = document.getElementById("trimSelect");

  //
  // for (var make in vehiclesObject) {
  //       makeSelect.options[makeSelect.options.length] = new Option(make, make);
  // }

  for (var i = 0; i < usedVehiclesObject.makes.length; i++) {
      makeSelect.options[makeSelect.options.length] = new Option(usedVehiclesObject.makes[i].nm, usedVehiclesObject.makes[i].nm);
  }

  makeSelect.onchange = function () {
        trimSelect.length = 1; // remove all options bar first
        modelSelect.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var i = 0; i < usedVehiclesObject.makes[this.selectedIndex - 1].md.length; i++) {
            // console.log(usedVehiclesObject.makes[this.selectedIndex - 1].md);
            // console.log(this.selectedIndex);
            modelSelect.options[modelSelect.options.length] = new Option(usedVehiclesObject.makes[this.selectedIndex - 1].md[i].nm, usedVehiclesObject.makes[this.selectedIndex - 1].md[i].nm);
        }
  }

};
