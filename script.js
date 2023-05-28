const button = document.getElementById('generate');
const textarea = document.getElementById('loremIpsum');

button.addEventListener('click', function() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet maximus nec, tempus auctor diam. Nunc odio turpis, mollis in nisl in, ullamcorper vehicula nibh.';
    textarea.value = loremIpsum;

    // Copy to clipboard
    textarea.select();
    document.execCommand('copy');
    alert('Lorem Ipsum copied to clipboard');
});
