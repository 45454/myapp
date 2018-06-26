function postdata() {
    var param = {
        city:city,
        startDate:startDate,
        endDate:endDate,
        data:{
            dataPM25Index:dataPM25Index,
            dataPM10Index:dataPM10Index,
            dataSO2Index:dataSO2Index,
            dataNO2Index:dataNO2Index,
            dataCOIndex:dataCOIndex,
            dataO3Index:dataO3Index,
            dataAQI:dataAQI,
            dataIndex:dataIndex
        }
    }

    $.ajax({
        type: "post",
        dataType:'json',

        url: "http://localhost:3000/post",
        data: {
            param: param
        },
        success: function(datas) {

        }})
}