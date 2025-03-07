<script>
    // Select the input field by its ID
    const inputField = document.getElementById('fname');

    // Add an event listener for when the input loses focus (blur event)
    inputField.addEventListener('blur', function() {
        inputField.value = inputField.value.toUpperCase();
    });
</script>
