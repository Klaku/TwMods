var CreateTimeTable = () => {
    $(".twm-estimation").remove();
    ["wood", "stone", "iron"].forEach(material => {
        $(".cost_" + material).each((index, element) => {
            if (Number($(element).attr('data-cost')) > game_data.village[material]) {
                var node = $($(element.parentNode).children(".build_options")[0]);

                node.children('div.twm-' + material).remove();
                var estimation = TwMods.parseTime(Math.floor((Number(element.innerText) - game_data.village[material]) / game_data.village[material + "_prod"]));
                node[0].innerHTML += '<div style="color:#000; padding:2px 0px" class="twm-' + material + '"><span class="icon header ' + material + '"> </span>' + estimation + '</div>';
            }
        })
    })
}
setInterval(CreateTimeTable, 1000);