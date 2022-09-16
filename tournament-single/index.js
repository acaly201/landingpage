$(document).ready(function()
{
    function activeTab(obj)
    {
        $('.box-content-tournament-single ul li').removeClass('active');
        $(obj).addClass('active');
        var id = $(obj).find('a').attr('href');
        $('.tab-item').hide();
        $(id) .show();
    }
    $('.menu-box-content-tournament-single li').click(function(){
        activeTab(this);
        return false;
    });
    activeTab($('.menu-box-content-tournament-single li:first-child'));
});