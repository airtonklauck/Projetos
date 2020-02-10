class FormularioView extends View {

	template() {
		return `
			<form class="formulario" onsubmit="cadastroController.adiciona(event)">
	            <fieldset>
	                <legend class="formulario_titulo">Adicionar novo cliente</legend>
	                <label for="nome">Nome:</label>
	                <input type="text" name="nome" id="nome" required autofocus>
	                <label for="email">Email:</label>
	                <input type="email" name="email" id="email" required>
	                <label for="telephone">Telefone:</label>
	                <input type="tel" name="telefone" id="telephone" required>
	            </fieldset>
	            <button class="botao" type="submit">Adicionar</button>
	        	<button class="botao" type="button" onclick="cadastroController.apaga()">Apagar</button>
	        </form>
		`;
	}
}