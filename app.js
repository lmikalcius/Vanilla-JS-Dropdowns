

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


// var usedVehiclesObject = {
//     makes: [
//         {
//             "nm": "Toyota",
//             "md": [{ "nm": "Camry" }, { "nm": "Prius"} ]
//         },
//         {
//             "nm": "Honda",
//             "md": [{ "nm": "Accord" }, { "nm": "Civic"} ]
//         },
//         {
//             "nm": "BMW",
//             "md": [{ "nm": "3-Series" }]
//         }
//     ]
// }
// window.onload = function () {
//     var makeSelect = document.getElementById("makeSelect");
//     var modelSelect = document.getElementById("modelSelect");
//     var trimSelect = document.getElementById("trimSelect");
//
//     for (var i = 0; i < usedVehiclesObject.makes.length; i++) {
//         makeSelect.options[makeSelect.options.length] = new Option(usedVehiclesObject.makes[i].nm, usedVehiclesObject.makes[i].nm);
//     }
//
//     makeSelect.onchange = function () {
//         trimSelect.length = 1; // remove all options bar first
//         modelSelect.length = 1; // remove all options bar first
//         if (this.selectedIndex < 1) return; // done
//         for (var i = 0; i < usedVehiclesObject.makes[this.selectedIndex - 1].md.length; i++) {
//             // console.log(usedVehiclesObject.makes[this.selectedIndex - 1].md);
//             // console.log(this.selectedIndex);
//             modelSelect.options[modelSelect.options.length] = new Option(usedVehiclesObject.makes[this.selectedIndex - 1].md[i].nm, usedVehiclesObject.makes[this.selectedIndex - 1].md[i].nm);
//         }
//     }
//
// };

var wholeMvisObject = {
    "stockTypes": [
        {
            // used: {
                nm: "used",
                makes: [
                    {
                        "nm": "AM General",
                        "md": [{ "nm": "Hummer" }, { "nm": "H2"} ]
                    },
                    {
                        "nm": "BMW",
                        "md": [{ "nm": "Z3" }]
                    }
                ]
            // }
        },
        {
            // new: {
                nm: "new",
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
            // }
        }
    ]
}


window.onload = function () {
    var localStorageObject = {
        stkType: "new",
        make: "BMW",
        model: "3-Series",
        makeId: 20051,
        maxPrice:"60000",
        mileage: "93,318"
    };

    localStorage.setItem('Cars.userData', JSON.stringify(localStorageObject));

    var stockTypeSelect = document.getElementById("stockTypeSelect");
    var makeSelect = document.getElementById("makeSelect");
    var modelSelect = document.getElementById("modelSelect");

    for (var i = 0; i < wholeMvisObject.stockTypes.length; i++) {
        var stockTypeName = wholeMvisObject.stockTypes[i].nm;
        stockTypeSelect.options[i + 1] = new Option(stockTypeName, stockTypeName);
    }

    stockTypeSelect.onchange = function () {
        modelSelect.length = 1; // remove all options bar first
        makeSelect.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done

        var makeListLength = wholeMvisObject.stockTypes[this.selectedIndex - 1].makes.length;
        for (var i = 0; i < makeListLength; i++) {
            var makeName = wholeMvisObject.stockTypes[this.selectedIndex - 1].makes[i].nm;
            makeSelect.options[i + 1] = new Option(makeName, makeName);
        }
    }
    makeSelect.onchange = function () {
        modelSelect.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done

        var modelListLength = wholeMvisObject.stockTypes[stockTypeSelect.selectedIndex - 1].makes[this.selectedIndex - 1].md.length;
        for (var i = 0; i < modelListLength; i++) {
            var modelName = wholeMvisObject.stockTypes[stockTypeSelect.selectedIndex - 1].makes[this.selectedIndex - 1].md[i].nm;
            modelSelect.options[i + 1] = new Option(modelName, modelName);
        }
    }

    var presets = JSON.parse(localStorage.getItem('Cars.userData'));
    stockTypeSelect.value = presets.stkType;
    stockTypeSelect.onchange();
    makeSelect.value = presets.make;
    makeSelect.onchange();
    modelSelect.value = presets.model;
};
