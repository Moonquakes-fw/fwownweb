$(function(){
        let order_time = null;

        // 时间计算
        function endTime(endDate) {
            let leftTime = (new Date(endDate)) - new Date(); //计算剩余的毫秒数
            let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
            let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
            let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
            let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
            days = checkTime(days);
            hours = checkTime(hours);
            minutes = checkTime(minutes);
            seconds = checkTime(seconds);
            if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0) {
                $("p.day").text(days);
                $("p.hour").text(hours);
                $("p.min").text(minutes);
                $("p.sec").text(seconds);
            }
        }

        function checkTime(i) { //将0-9的数字前面加上0，例1变为01
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        // 刷新时间
        function runTime(time) {
            let futureDate = new Date(time);
            order_time = setInterval(function () { endTime(futureDate) }, 1000);
        }

        // 执行
        $(function () {
            let futureTime = "2024-8-28 20:00:00";
            runTime(futureTime);
            $(".tips").text(futureTime);
        });
});