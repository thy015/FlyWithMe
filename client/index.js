document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('passengerDropdown');
    var button = document.getElementById('passengerButton');

    button.addEventListener('click', function () {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.dropbtn')) {
            dropdown.style.display = 'none';
        }
    });

    var plusButtons = document.querySelectorAll('.plus');
    var minusButtons = document.querySelectorAll('.minus');
    var counts = document.querySelectorAll('.count');

    plusButtons.forEach(function (btn, index) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var count = parseInt(counts[index].textContent);
            if (count < 9) {
                counts[index].textContent = count + 1;
                updateButtonLabel();
            }
        });
    });

    minusButtons.forEach(function (btn, index) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var count = parseInt(counts[index].textContent);
            if (count > 0) {
                counts[index].textContent = count - 1;
                updateButtonLabel();
            }
        });
    });

    function updateButtonLabel() {
        var adultCount = parseInt(counts[0].textContent);
        var childCount = parseInt(counts[1].textContent);
        var infantCount = parseInt(counts[2].textContent);

        var label = adultCount + ' Người lớn';
        if (childCount > 0) {
            label += ', ' + childCount + ' Trẻ em';
        }
        if (infantCount > 0) {
            label += ', ' + infantCount + ' Trẻ sơ sinh';
        }

        button.textContent = label;
    }
});
