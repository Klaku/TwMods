var TwMods = {
    getScript: (name: string | null) => {
        if (name == null) return;
        var element = document.createElement('script');
        $.get('http://localhost:8080/modules/' + name + ".js").then(response => { element.innerHTML = response; document.body.appendChild(element) });
    },
    parseTime: (seconds: number) => {
        var sec_num = parseInt(seconds.toString(), 10)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }
}

TwMods.getScript(new URL(document.location.toString()).searchParams.get('screen'));