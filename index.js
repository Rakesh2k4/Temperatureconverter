let click = document.getElementById("calculate")
click.addEventListener("click" ,function() {
    let input = parseFloat(document.getElementById("value").value)
    let opt1 = document.getElementById("select1").value
    let opt2 = document.getElementById("select2").value
    console.log(opt1)
    console.log(opt2)
    let afterconvert
    if(opt1 === "celsius")
    {
        if(opt2 === "celsius")
        {
            document.getElementById("print").innerText="Unable to convert"
        }
        else if(opt2 === "kelvin")
        {
            afterconvert = input + 273.15
            document.getElementById("print").innerText=`Temperature in kelvin :  ${afterconvert}K`
        }
        else if(opt2 === "fahrenheit")
        {
            afterconvert = ((9/5)*input)+32
            document.getElementById("print").innerText=`Temperature in Fahrenheit : ${afterconvert}°F`
        }
    }
    else if(opt1 === "kelvin")
    {
        if(opt2 === "kelvin")
        {
            document.getElementById("print").innerText="Unable to convert"
        }
        else if(opt2 === "celsius")
        {
            afterconvert = input - 273.15
            document.getElementById("print").innerText=`Temperature in celsius : ${afterconvert}°C`
        }
        else if(opt2 === "fahrenheit")
        {
            afterconvert = ((input - 273.15)*(9/5))+32
            document.getElementById("print").innerText=`Temperature in Fahrenheit : ${afterconvert}°F`
        }
    }
    else if(opt1 === "fahrenheit")
    {
        if(opt2 === "fahrenheit")
        {
            document.getElementById("print").innerText="Unable to convert"
        }
        else if(opt2 === "celsius")
        {
            afterconvert = ((input - 32)*(5/9))
            document.getElementById("print").innerText=`Temperature in celsius : ${afterconvert}°C`
        }
        else if(opt2 === "kelvin")
        {
            afterconvert = ((input - 32)*(5/9)) + 273.15
            
            document.getElementById("print").innerText=`Temperature in kelvin : ${afterconvert}K`
        }
    }
})
