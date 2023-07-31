// fetch('https://openapi.baidu.com/rest/2.0/tongji/config/getSiteList?access_token=121.c0e965652647234274197047326dce03.YDspG2-n97d8fKNAzrnhM8muOMPaNpU8UPqVKm5.LekRBQ')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

let d= {};
a();
function a(){
    // fetch('https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=121.c0e965652647234274197047326dce03.YDspG2-n97d8fKNAzrnhM8muOMPaNpU8UPqVKm5.LekRBQ&site_id=18688698&method=trend/latest/a&metrics=area,searchword,visit_time,visit_pages&order=visit_pages,desc&max_results=100&source=through&area=china')
    fetch('https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=121.c0e965652647234274197047326dce03.YDspG2-n97d8fKNAzrnhM8muOMPaNpU8UPqVKm5.LekRBQ&site_id=18688698&method=trend/latest/a&max_results=100&area=china')
        .then(response => response.json())
        // .then(data => console.log(data))
        // .then(data => console.log(data.result))
        // .then(data => console.log(data.result.items))
        // .then(data => console.log(data.result.items[0]))
        .then(data => d=data)
        .catch(error => console.log(error));
}




console.log(d)
