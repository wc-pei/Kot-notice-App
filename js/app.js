const slackInfo = {
    slack_access_token: 'xoxb-16597064195-4899975821603-OP6njl3kRhzfhlcK6B2MPyBD',
    channel: '#times_pei',
    channel_id: 'C04RQ906YMT'
};

const workStatus = {
    work_start: '出勤',
    work_finish: '退勤',
    remote_start: ':remote_work:',
    remote_finish: ':remotework_end_owari:'
};

// payloadとajaxについて
const payLoad = (message) => {
    const xhr = new XMLHttpRequest();
    const url = `https://slack.com/api/chat.postMessage`;
    const data = `token=${slackInfo.slack_access_token}&channel=${slackInfo.channel_id}&text=${message}`;

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

    window.alert(`${slackInfo.channel}チャンネルに打刻メッセージを送りました。`);
};

postToSlack();