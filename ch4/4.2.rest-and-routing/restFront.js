async function getUser() { // 로딩 시 사용자 정보 가져옴
    console.log('getUser start...');
    try {
        const res = await axios.get('/users'); // get method
        const users = res.data; //res 에서 받아옴
        const list = document.getElementById('list');
        list.innerHTML = '';

        // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
        Object.keys(users).map(function(key) {
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            span.textContent = users[key];

            // 수정 버튼
            const edit =  document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async()=> { // 수정 버튼 클릭 이벤트
                const name = prompt('바꿀 이름을 입력하세요');
                if(!name) {
                    return alert('이름을 입력하세요');
                }
                alert('수정하겠습니다');
                try {
                    await axios.put('/user/' + key , { name });
                    getUser();
                } catch (error) {
                    console.error(err);
                }
            });

            // 삭제 버튼
            const remove =  document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async()=> { // 삭제 버튼 클릭 이벤트
                alert('삭제하겠습니다');
                try {
                    await axios.delete('/user/' + key);
                    getUser();
                } catch (error) {
                    console.error(err);
                }
            });

            // 화면 
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
            console.log('res.data : ', res.data);
        });


    } catch(err) {
        console.error(err);
    }
}

// 화면 로딩 시 getUser 호출
window.onload = getUser;
// form submit
document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = e.target.username.value;
    if (!name) {
        return alert('이름을 입력하세요');
    }

    try {
        await axios.post('/user', { name });
        getUser();
    } catch (err) {
        console.error(err);
    }

    e.target.username.value = '';
});