const outputAnswer = document.querySelector(".answer");

function evaluatePension() {
    event.preventDefault();

    let birthDate = document.getElementById("example-date-input").value;

    if (birthDate >= '1950-01-01' && birthDate <= '1954-06-30') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 65 ½ år";
    } else if (birthDate >= '1954-07-01' && birthDate <= '1954-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 66 år";
    }
    
    if (birthDate >= '1955-01-01' && birthDate <= '1955-06-30') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 66 ½ år";
    } else if (birthDate >= '1955-07-01' && birthDate <= '1962-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 67 år";
    }
    
    if (birthDate >= '1963-01-01' && birthDate <= '1966-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 68 år";
    } else if (birthDate >= '1967-01-01' && birthDate <= '1970-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 69 år";
    }
    
    if (birthDate >= '1971-01-01' && birthDate <= '1974-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 70 år";
    } else if (birthDate >= '1975-01-01' && birthDate <= '1978-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 71 år";
    }
    
    if (birthDate >= '1979-01-01' && birthDate <= '1979-12-31') {
        outputAnswer.textContent = "Du er kvalificeret til pension. 72 år";
    } else if (birthDate >= '1981-01-01' && birthDate >= '1982-01-01') {
        outputAnswer.textContent = "Du er ikke kvalificeret til pension (Højere end 1982)";
    }
    
}
