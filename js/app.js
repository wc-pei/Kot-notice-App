const slackInfo = {
    slack_access_token: 'xoxb-16597064195-4899975821603-EsqIKHMAki2iJIofk8oD8dCX',
    channel: '#times_pei',
    channel_id: 'C04RQ906YMT'
};

const workStatus = {
    work_start: 'ChromeExtensionで出社を送信',
    work_finish: 'ChromeExtensionで退勤を送信',
    remote_start: ':remote_work:',
    remote_finish: ':remotework_end_owari:'
};

setTimeout('postToSlack()', 3000);

// payloadとajaxについて
const payLoad = (message) => {
    const xhr = new XMLHttpRequest();
    const url = `https://slack.com/api/chat.postMessage`;
    const data = `token=${slackInfo.slack_access_token}&channel=${slackInfo.channel_id}&text=${message}`;
    // const current = new Date();
    // const engravingTime = `${current.getFullYear()}年${current.getMonth()+1}月${current.getDate()}日${current.getHours()}時${current.getMinutes()}分`;

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if(xhr.status = 200) {
            const responseData = JSON.parse(xhr.responseText);
            console.log(`成功! ${responseData.ok}`);
        } else {
            console.log(`ステータス: ${xhr.status}`);
        }
    };
    xhr.send(data);
    window.alert(`${slackInfo.channel}チャンネルに打刻メッセージを送りました。`);
};

// ボタンをクリックしたタイミングで出勤状況を送信させる
const postToSlack = () => {
    const clockIn = document.getElementsByClassName('record-btn-inner record-clock-in');
    clockIn[0].addEventListener('click', () => {
        payLoad(workStatus.work_start);
    }, false);
    const clockOut = document.getElementsByClassName('record-btn-inner record-clock-out');
    clockOut[0].addEventListener('click', () => {
        payLoad(workStatus.work_finish);
    }, false);
};