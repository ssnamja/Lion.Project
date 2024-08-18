document.addEventListener('DOMContentLoaded', () => {
    const elcm = document.getElementById('cm');
    const elinch = document.getElementById('inch');

    const elCelsius = document.getElementById('Ce');
    const elFahrenheit = document.getElementById('Fa');

    const elsubmit = document.getElementById('submit');
    const elreset = document.getElementById('reset');

    // cm-inch
    function calculateCmInch() {
        let cmValue = parseFloat(elcm ? elcm.value : NaN);
        let inchValue = parseFloat(elinch ? elinch.value : NaN);

        if (!isNaN(cmValue)) {
            elinch.value = (cmValue / 2.54).toFixed(2);
        }

        if (!isNaN(inchValue)) {
            elcm.value = (inchValue * 2.54).toFixed(2);
        }
    }

    // celsius-fahrengeit
    function calculateTemperature() {
        let celsiusValue = parseFloat(elCelsius ? elCelsius.value : NaN);
        let fahrenheitValue = parseFloat(elFahrenheit ? elFahrenheit.value : NaN);

        if (!isNaN(celsiusValue)) {
            elFahrenheit.value = ((celsiusValue * 9/5) + 32).toFixed(2);
        }

        if (!isNaN(fahrenheitValue)) {
            elCelsius.value = ((fahrenheitValue - 32) * 5/9).toFixed(2);
        }
    }

    // Reset
    function resetFields(...fields) {
        fields.forEach(field => {
            if (field) {
                field.value = '';
            }
        });
    }

    // Submit Event
    elsubmit.addEventListener('click', () => {
        // cm-inch 변환
        if (elcm || elinch) {
            calculateCmInch();
        }
        // celsius-fahrengeit 변환
        if (elCelsius || elFahrenheit) {
            calculateTemperature();
        }
    });

    // Reset Event
    elreset.addEventListener('click', () => {
        resetFields(elcm, elinch, elCelsius, elFahrenheit);
    });
});
