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
	<div class="container">
		<div class="chatbox">
			<div class="GornyPasek">
				<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
				<div class="name">Pokój 1: Bagno</div>
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
		<div class="containerPokoje d-none d-sm-block">
			<div class="dostepnePokoje d-none d-sm-block">Dostępne pokoje</div>
			<ul class="ListaPokoje">
				<li class="pokoj focus">
					<span class="title">Pokój 1: Bagno </span>
					<span class="time">21:37</span><br>
					<span class="preview">Tasdasd asd ad asdss.</span>
				</li>
				<li class="pokoj">
					<span class="title">Pokój 2: Dom Shreka </span>
					<span class="time">2:30</span><br>
					<span class="preview">Lorem ipsum.</span>
				</li>
				<li class="pokoj">
					<span class="title">Pokój 3: Zamek Lorda Farquaada </span>
					<span class="time">15:15</span><br>
					<span class="preview">Lorem ipsum.</span>
				</li>
				<li class="pokoj">
					<span class="title">Pokój 4: Gospoda Zacisze</span>
					<span class="time">0:12</span><br>
					<span class="preview">Lorem ipsum.</span>
				</li>
				<li class="pokoj">
					<span class="title">Pokój 5: Bajo-jajo</span>
					<span class="time">14:59</span><br>
					<span class="preview">Lorem ipsum.</span>
				</li>
			</ul>
		</div>
		<div class="cointainerOsoby d-none d-lg-block">
			<div class="profil">
				<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
				<div class="name2">Shrek<p class="email text-wrap">Twoja nazwa</p></div>
			</div>
			<div class="dostepniUzytkownicy d-none d-sm-block">Dostępni użytkownicy</div>
			<ul class="ListaUzytkownikow">
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Shrek </span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Jakiś inny fagas </span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Pioter </span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Mathew</span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
				<li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
        <li class="user">
					<div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
					<span class="title">Bydle</span>
				</li>
			</ul>
		</div>
	</div>
</template>
