function get_calc(btn) {
	console.log("btn=", btn);
	if (btn.value == "=") {
		document.dentaku.display.value = eval(document.dentaku.display.value);
	} else if (btn.value == "C") {
		document.dentaku.display.value = "";
	} else {
		switch (btn.value) {
			case "×":
				btn.value = "*";
				break;
			case "÷":
				btn.value = "/";
				break;
			case "±": {
				let tmp = document.dentaku.display.value;
				let pick;
				// tmp 4*6+3*77 len=8
				// 後ろから1文字ずつ取り出す
				// 0-7以外だったら終了
				// 終了した位置を覚えておく
				let pos = 0;
				for (let i = 0; i < tmp.length; i++) {
					if (tmp[i] >= "0" && tmp[i] <= "9") {
						console.log(tmp[i] + "は数値です");
					} else {
						console.log(tmp[i] + "は記号です");
						pos = i;
					}
				}
				console.log("分ける場所は i=", pos);
				console.log("tmp=", tmp[tmp.length]);
				document.dentaku.display.value = tmp;

				let prev_moji = tmp.substring(0, pos + 1);
				let end_moji = tmp.substring(pos + 1, tmp.length);
				console.log("prev=", prev_moji);
				console.log("end=", end_moji);
				document.dentaku.display.value = prev_moji + Number(end_moji) * -1;

				return;
			}

			case "%":
				{
					// 4-55の時、4-0.
					let tmp = document.dentaku.display.value.split("*");
					console.log("tmp=", tmp);
					console.log("tmp=", tmp.length);
					// 4*5*6%
					tmp[tmp.length - 1] = tmp[tmp.length - 1] / 100;
					document.dentaku.display.value = "4*";
					document.dentaku.display.value += tmp[tmp.length - 1];
				}
				break;
		}
		if (btn.value != "%") {
			document.dentaku.display.value += btn.value;
		}
		document.dentaku.add_btn.value = "×";
		document.dentaku.div_btn.value = "÷";
	}
}
