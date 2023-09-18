from selenium import webdriver
import unittest

class TestVisualFeedback(unittest.TestCase):
    def setUp(self):
        # Configurar o WebDriver do Chrome
        self.driver = webdriver.Chrome()

    def test_background_color(self):
        # Abra a página da web que deseja testar
        self.driver.get("https://esp-firebase-vitor.web.app")

        # Localize o elemento HTML pelo seu ID (substitua "element_id" pelo ID real do elemento)
        element = self.driver.find_element("id", "home")


        # Obtenha o valor da propriedade "background-color"
        background_color = element.value_of_css_property("background-color")

        # Verifique se a cor de fundo é igual à cor esperada (substitua "cor_esperada" pela cor que você espera)
        cor_esperada = "rgba(236, 242, 255, 1)"  # Exemplo de cor esperada (vermelho)
        self.assertEqual(background_color, cor_esperada, "A cor de fundo não é a esperada.")

    def tearDown(self):
        # Feche o navegador após o teste
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
