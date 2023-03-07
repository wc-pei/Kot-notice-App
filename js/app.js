const slackInfo = {
    slack_access_token: 'xoxb-16597064195-4899975821603-OP6njl3kRhzfhlcK6B2MPyBD',
    channel: '#times_pei',
    channel_id: 'C04RQ906YMT'
};

const workStatus = {
    work_start: '出勤',
    work_finish: '退勤'
};

// payloadとajaxについて
const payload = (message) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://slack.com/api/chat.postMessage?';
    const data = url + `token=${slackInfo.slack_access_token}&channel=${slackInfo.channel_id}&text=${message}`;

    xhr.open('POST', data);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if(xhr.status = 200) {
            console.log(`成功！${xhr.responseText}`);
        } else {
            console.log(`status = ${xhr.status}`);
        }
    };
    xhr.send(message);
};
