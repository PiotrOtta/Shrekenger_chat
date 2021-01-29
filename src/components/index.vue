<style>
#tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
}
</style>
<template>
		<div class="chatbox">
			<div class="GornyPasek">
				<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
				<div class="name">{{ getActiveRoomName }}</div>
        <span class="badge d-sm-none">0 użytkowników</span>
			</div>
			<div class="middle">
				<div>
					<div class="incoming">
						<div class="name">Shrek</div>
						<div class="bubble">Siemka koluniu. Wypad z mojego bagna!</div>
						<div class="bubble">Vivamus sit amet laoreet purus. Donec condimentum quam lorem, ac ornare leo varius et. Nam dapibus mollis mauris ut euismod. Aliquam finibus lobortis tellus, eu hendrerit tellus dapibus ultrices. Pellentesque ut pretium metus, et venenatis magna. Praesent nec nisl quis ante tristique facilisis vel sit amet lectus. In hac habitasse platea dictumst. Duis non orci quis libero elementum commodo. Pellentesque sed dictum justo. Etiam ipsum velit, consectetur in egestas ut, commodo sit amet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc urna eros, pellentesque nec purus nec, malesuada imperdiet lorem.</div>
					</div>
					<div class="outgoing">
						<div class="test"><span class="bubble">Sponio.</span></div>
						<div class="test"><span class="bubble">Ale jeszcze wpadne.</span></div>
					</div>
					<div class="incoming">
						<div class="name">Jakiś inny fagas</div>
						<div class="bubble">Tasdasd asd ad asdss.</div>
					</div>
					<div class="outgoing">
						<div class="bubble">Vivamus sit amet laoreet purus. Donec condimentum quam lorem, ac ornare leo varius et. Nam dapibus mollis mauris ut euismod. Aliquam finibus lobortis tellus, eu hendrerit tellus dapibus ultrices. Pellentesque ut pretium metus, et venenatis magna. Praesent nec nisl quis ante tristique facilisis vel sit amet lectus. In hac habitasse platea dictumst. Duis non orci quis libero elementum commodo. Pellentesque sed dictum justo. Etiam ipsum velit, consectetur in egestas ut, commodo sit amet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc urna eros, pellentesque nec purus nec, malesuada imperdiet lorem.</div>
					</div>
					<div class="typing">
						<div class="bubble">
							<div class="kulka pierwsza"></div>
							<div class="kulka druga"></div>
							<div class="kulka trzecia"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom-bar">
				<div>
          <input type="text" placeholder="Wpisz wiadomość..." />
          <button class="buttonix">
            <span>Wyślij</span>
            <div class="wave"></div>
          </button>
				</div>
			</div>
		</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["getActiveRoomName"])
  }
}

</script>
