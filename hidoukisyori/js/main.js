// main.js
// 非同期処理がすぐに終わらないようにするため、ブラウザのNo throttlingを3Gにする

// async/awaitがある場合
const checkGitHubApi_async = async () => {
    console.log("--- GitHub通信デモ開始 ---");

    // 【成功：自分のアカウント情報を取る】
    try {
        console.log("1. GitHubからユーザー情報を取得開始...");

        // fetchした瞬間の予約票を保持
        const gitURL = fetch('https://api.github.com/users/kento-user'); // ここを自分のIDに！
        console.log("2. fetch直後の状態（予約票）:", gitURL); // 3G設定ならここでPendingが見える！

        const response = await gitURL; // 完了まで待機
        console.log("3. 通信完了！（Fulfilled）:", response);

        const data = await response.json();
        console.log("4. 届いたデータ（あなたの名前）:", data.name);
        console.log("5. フォロワー数:", data.followers);

    } catch (error) {
        console.error("成功ルートでエラー？:", error);
    }

    console.log("\n------------------\n");

    // 【失敗：存在しないユーザーを探す】
    try {
        console.log("6. 絶対にいないユーザーを探してみます...");
        // 存在しないURLや、404エラーになる通信
        const errorPromise = fetch('https://api.github.com/users/non-existent-user-99999999');

        const response = await errorPromise;

        // GitHub APIはURL自体が有効だとエラー(Rejected)にならず、404ステータスを返す。
        // 強制的にRejectedを体験するために、ステータスチェックを入れるよ。
        if (!response.ok) {
            throw new Error(`ユーザーが見つかりませんでした (Status: ${response.status})`);
        }

    } catch (error) {
        console.log("7. エラーをキャッチ！（Rejected相当の処理）");
        console.error("エラー内容:", error.message);
    }
};

// async/awaitが無い場合
const checkGitHubApi = () => {
    console.log("--- GitHub通信デモ開始 ---");

    // 【成功：自分のアカウント情報を取る】
    try {
        console.log("1'. GitHubからユーザー情報を取得開始...");

        // fetchした瞬間の予約票を保持
        const gitURL = fetch('https://api.github.com/users/kento-user'); // ここを自分のIDに！
        console.log("2'. fetch直後の状態（予約票）:", gitURL); // 3G設定ならここでPendingが見える！

        const response = gitURL; // 完了まで待機
        console.log("3'. 通信完了！（Fulfilled）:", response);

        const data = response.json();
        console.log("4'. 届いたデータ（あなたの名前）:", data.name);
        console.log("5'. フォロワー数:", data.followers);

    } catch (error) {
        console.error("成功ルートでエラー？:", error);
    }

    console.log("\n------------------\n");

    // 【失敗：存在しないユーザーを探す】
    try {
        console.log("6'. 絶対にいないユーザーを探してみます...");
        // 存在しないURLや、404エラーになる通信
        const errorPromise = fetch('https://api.github.com/users/non-existent-user-99999999');

        const response = errorPromise;

        // GitHub APIはURL自体が有効だとエラー(Rejected)にならず、404ステータスを返す。
        // 強制的にRejectedを体験するために、ステータスチェックを入れるよ。
        if (!response.ok) {
            throw new Error(`ユーザーが見つかりませんでした (Status: ${response.status})`);
        }

    } catch (error) {
        console.log("7'. エラーをキャッチ！（Rejected相当の処理）");
        console.error("エラー内容:", error.message);
    }
};

checkGitHubApi_async();
checkGitHubApi();