function showQuotes() {

    const arr = [
        "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
        "सत्यमेव जयते।",
        "अहिंसा परमो धर्मः।",
        "वसुधैव कुटुम्बकम्।",
        "धर्मो रक्षति रक्षितः।",
        "मातृदेवो भव।",
    ];

    const random = Math.random(); 
    const randomIndex = Math.floor(random * arr.length);

    document.getElementById("Quotes").innerHTML = arr[randomIndex];
}
