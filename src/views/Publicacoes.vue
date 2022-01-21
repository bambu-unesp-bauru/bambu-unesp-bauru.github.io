<template>
	<div class="Publicacoes">
		<HeroTitle></HeroTitle>

		<div class="gallery">
			<figure>
				<img :src="imageSrc('/7_bambu_de_corpo_e_alma_1_e_2_edicao_1.jpg', 'publicacoes')" alt="Bambu corpo e alma">
			</figure>
		</div>

		<TheContent>
			<section class="livros-publicados">
				<h3>Livros publicados/organizados ou edições</h3>
				<!-- <p>Pereira, M. A. R.; BERALDO, A. L. . Bambu de Corpo e Alma. 2. ed. Bauru: Canal 6, 2016. v. 1. 348p .</p> 
				<p>PEREIRA, M. A. R.; BERALDO, Antonio Ludovico. Bambu de Corpo e Alma. Bauru: Canal 6 Projetos Editoriais, 2007. v. 1. 239p .</p> 
				<p>DOS REIS PEREIRA, MARCO ANTONIO; BARATA, TOMAS QUEIROZ FERREIRA. Bamboo as Sustainable Material Used in Design and Civil Construction: Species, Management, Characterization and Applications. Key Engineering Materials (Online) , v. 634, p. 339-350, 2014.</p> 
				<p>GALHIANE, M S ; RISSATO, S R ; PEREIRA, M. A. R. ; ALMEIDA, Marcos Vinícius de ; SILVA, L C da . Evaluation of the effects of different extraction methods for main volatile compounds from Bambusa textilis leaves. Journal of Bamboo and Rattan, VSP - Holanda, v. 4, n.3, p. 243-250, 2005. </p>
				<p>PEREIRA, M. A. R.; CARRARA, H. B. ; BARATA, T. Q. F. ; VALARELLI, Ivaldo de Domenico ; AZAMBUJA, M. A. . Projeto de Produção e Processo de Pré-fabricação de Componentes de Bambu. Floresta e Ambiente, v. 19, p. 200-209, 2012.</p> 
				<p>PEREIRA, M. A. R.; Carneiro, R. R. ; RAMOS, B. P. F. . Desenvolvimento de produtos artesanais em bambu e em bambu laminado colado, e a transferência desse conhecimento para a comunidade do assentamento rural Horto de Aimorés. Revista Ciência em Extensão, v. 6, p. 159-159, 2010.</p> 
				<p>PEREIRA, M. A. R.. Determinação de características físicas do bambu gigante laminado (Dendrocalamus giganteus) cultivado na Unesp/Campus de Bauru. Revista Madeira, v. 18, p. 1-15, 2006.</p> 
				<p>PEREIRA, M. A. R.. Características Hidráulicas de Tubos de Bambu Gigante. Engenharia Agrícola , Jaboticabal, v. 21, n.1, p. 32-42, 2002.</p> 
				<p>PEREIRA, M. A. R.; SOUSA, A. P. . Hidráulica de tubos de bambu : Coeficiente C de Hazen-Williams. Irriga (Botucatu), FCA-Unesp-Botucatu, v. 4, n.2, p. 120-138, 1999. </p>
				<p>PEREIRA, M.A.R.; CARRARA, H. B. ; BARARA, T.Q.F. ; VALARELLI, I. D. ; AZAMBUJA, M. A. . Projeto de Produção e Processo de Pré-fabricação de componentes de Bambu. Floresta e Ambiente, v. 19, p. 200-209, 2012. </p>
				<p>Pereira, M.A.R; BARATA, T. Q. F. . Bamboo as sustainable material used in design and civil construction: species, management, characterization and applications. Key Engineering Materials , v. 634(2015), p. 339-350, 2015. </p>
				<p>RAMOS, B. P. F. ; Pereira, M.A.R. . O Uso do Bambu Laminado Colado na Confecção de Mobiliário. Estudos em Design (Online), v. 22.1, p. 1-6, 2014. </p>
				<p>SANTOS, G. F. ; PEREIRA, M. A. R. . Desenvolvimento de produtos artesanais em bambu e em bambu laminado colado e a transferencia desse conhecimentopara a comunidade do Assentamento Rural Horto de Aimorés. Revista Ciência em Extensão, v. 7, p. 148-148, 2011. </p>
				<p>SILVA1, M. A. ; RODER1, M. A. ; PEREIRA, M.A.R. ; NEVES1, F. T. A. ; CONSTANTINO, D. . Avaliação farmacognóstica qualitativa das folhas do vegetal Bambusa textilis. Revista Salusvita (Online), v. 31, p. 237-246, 2012. </p>
				<p>VENTURA, F. C. ; RAMOS, B. P. F. ; Pereira, M.A.R. . Verification of Applicability of the Polyurethane Adhesive Based on Castor Oil in the Manufacture of Glued Laminated Bamboo. Journal of Chemistry and Chemical Engineering, v. 8, p. 898-905, 2014. </p>
				<p>WECKWERTH, N. V. B. ; WECKWERTH, P. H. ; DUARTE, M. A. H. ; CESARIO, F. ; RIVERA-PENA, M. E. ; NEVES, F. T. ; Pereira, M.A.R. ; VIVAN, R. R. . Avaliação do pH, liberação de íons cálcio e atividade antimicrobiana do cimento Portland associado a Ba mbusa textilis em diferentes proporções. SALUSVITA: REVISTA DA AREA DE CIENCIAS BIOLOGICAS E DA SAUDE, v. 36, p. 365-379, 2017.</p> 
				<p>YAMADA, T. R. U. ; NASCIMENTO, R. A. ; PEREIRA, M. A. R. . Desenvolvimento de uma Estrutura Flat Foldable em Bambu Laminado Colado baseada no Padrão Miura-Ori. ESTUDOS EM DESIGN (ONLINE), v. 25 n2, p. 1-24, 2017. </p> -->
				
				<!-- incluido por m-dantas -->
				<p>Pereira, M. A. R.; BERALDO, A. L. . Bambu de Corpo e Alma. 2. ed. Bauru: Canal 6, 2016. v. 1. 348p.</p>
				<p>PEREIRA, M. A. R.; BERALDO, Antonio Ludovico. Bambu de Corpo e Alma. Bauru: Canal 6 Projetos Editoriais, 2007. v. 1. 239p.</p>
			</section>

			<section class="livros-capitulos">
				<h3>Capítulos de livros publicados</h3>
				<!-- <p>Pereira, M. A. R.. Implantação do Projeto Bambu no assentamento rural Horto de Aimorés (SP).. In: Patrícia Maria Drumond; Guilherme Wiedman. (Org.). Bambus no Brasil da biologia à tecnologia. 1ed.Rio de Janeiro: ICH - Instituto Ciência Hoje, 2017, v. 1, p. 321-334.</p> 
				<p>AZAMBUJA, M. A. ; AFFONSO, S. B. A. ; Battistelle, R.A.G. ; VALARELLI, I. D. ; Pereira, M. A. R. ; SILVA, S. A. M. ; LAHR, F. A. R. . Esquadrias de bambu laminado colado. Bambus no Brasil da biologia à tecnologia. 1ed.Rio de Janeiro: ICH - Instituto Ciência Hoje, 2017, v. 1, p. 511-525.</p> 
				<p>SANTOS, J. V. G. ; PEREIRA, M.A.R. ; MEDOLA, F. O. ; PASCHOARELLI, L. C. . Design sustentável aplicado ao projeto de produtos assistivos (proteses) fabricados com biocompósitos. In: Amilton J. V. Arruda; Paulo Cesar Machado Ferroli; Lisiane Ilha Liberlotto. (Org.). Design, Artefatos e Sistema Sustentável. 1ed.São Paulo: Blucher, 2017, v. 1, p. 333-350.</p> 
				<p>GODINHO, G. M. ; BARATA, T. Q. F. ; PEREIRA, M. A. R. . Design e experimentação em bambu: desenvolvimento de uma linha de óculos de sol sustentável. In: Amilton J. V. Arruda; Paulo Cesar Machado Ferroli; Lisiane Ilha Liberlotto. (Org.). Design, Artefatos e Sistema Sustentável. 1ed.São Paulo: Blucher, 2017, v. 1, p. 287-300.</p> 
				<p>Pereira, M. A. R.; GODINHO, G. M. ; MARINO, J. O. M. ; FUJIMORI, M. H. C. . PROJETO TAQUARA. In: Luttgardes de Oliveira Neto; Marcelo Carbone Carneiro; Paulo Noronha Lisboa Filho; Fernanda Henriques. (Org.). Extensão Universitária Diversidade e Desenvolvimento Humano. 1ed.São Paulo: Cultura Acadêmica / Editora Unesp, 2017, v. 1, p. 31-50.</p> 
				<p>Carneiro, R. R. ; Pereira, M. A. R. . Bambu laminado colado termotratado: dimensões estratégicas na produção de móveis sustentáveis. In: Luis Carlos Paschoarelli ; Rosio Fernandez Baca Salcedo. (Org.). Design, Arquitetura e Urbanismo: Transversalidades. 1ed.Bauru: Canal 6, 2016, v. 1, p. 139-148.</p> 
				<p>YAMADA, T. R. U. ; NASCIMENTO, R. A. ; Pereira, M.A.R . Estrutura flat foldable baseada em técnica de corte e dobra do kirigami 3D: uma pesquisa experimental. In: Luis Carlso Paschoarelli ; Rosio Fernandez Baca Salcedo. (Org.). Design, Arquitetura e Urbanismo: Transversalidades. 1ed.Bauru: Canal 6, 2016, v. 1, p. 145-155.</p> 
				<p>VENTURA, F. C. ; Pereira, M.A.R ; MENEZES, M. S. . Design e arquitetura na integração social: resultados do Projeto Bambu. In: Luis Carlos Paschoarelli ; Rosio Fernandez Baca salcedo. (Org.). Design, Arquitetura e Urbanismo: Tranversalidades. 1ed.Bauru: CANAL 6, 2016, v. 1, p. 157-166.</p> 
				<p>BARATA, T. Q. F. ; SANTOS, G. F. ; Pereira, M. A. R. . Design participativo para a sustentabilidade. Uma experiência didática-metodológica aplicada ao ensino de Design do Produto. In: Ana Beatriz Andrade; Cassia Carra Domiciano; Dorival C. Rossi; Fausto O. Medola; Fernanda Henriques; José Carlos Plácido; Luis Carlos Paschoarelli; Milton Nakata; Monica Moura; Osmar V. Rodrigues; Paula Landin; Tomas Barata. (Org.). Ensaios em Design- Ações inovadoras. 1ed.Bauru: Canal 6, 2016, v. 1, p. 124-157.</p> 
				<p>SANTOS, G. F. ; Pereira, M.A.R . Design Participativo para a Sustentabilidade:Desenvolvimento de Painéis modulares para fechamento feitos em Bambu associado com Terra e Resíduos. In: Luis Carlso Paschoarelli; Rosio Fernandez Baca Salcedo. (Org.). Interação: Panorama das pesquisas em Design, Arquitetura e Urbanismo. 1ed.Bauru: Canal 6, 2015, v. 1, p. 127-138.</p> 
				<p>YAMADA, T. R. U. ; NASCIMENTO, R. A. ; Pereira, M.A.R . Origami:da Arte a Cência. In: Marizilda dos Santos Menezes; Luis Carlos Paschoarelli. (Org.). Design: Perspectivas. 1ed.Bauru: Canal 6, 2015, v. 1, p. 136-155.</p> 
				<p>Pereira, M.A.R.. Implantação do Projeto Bambu no Assentamento Rural Horto de Aimorés. In: Luttugardes de Oliveria Neto; Marcelo Carbone Carneiro; Paulo Noronha Lisboa Filho. (Org.). Universidade e Sociedade. 1ªed.São Paulo: Cultura Acadêmica/Editora Unesp, 2015, v. 1, p. 223-243.</p> 
				<p>Pereira, M. A. R.; BATTISTELLE, R. A. G. ; JABBOUR, C. J.C. . Innovative sustainable partnership between UNESP and a rural community: The bamboo project. In: VAZQUEZ-BRUST, D.; SARKIS, J.; CORDEIRO, J.. (Org.). Collaboration for sustainability and innovation in the Global South: a role for South-driven sustainability?. 1ed.New York London: Springer Publisher, 2014, v. 3, p. 257-270.</p> 
				<p>SOUZA, G. C. ; PEREIRA, M. A. R. . Construção de oficinas-escola em bambu e a transferência do conhecimento no desenvolvimento de produtos em bambu. In: Odebrecht. (Org.). Contribuições da engenharia para o desenvolvimento sustentável. 1ed.Rio de Janeiro: Fundação Odebrecht, 2009, v. 1, p. 1-184.</p> 
				<p>Barelli, B.G. ; PEREIRA, M. A. R. ; LANDIN, Paula da Cruz . A tecnologia na confecção de protótipos em bambu laminado colado desenvolvida na Unesp-Bauru. In: Jofre Silva. (Org.). Design, Arte e Tecnologia 4. 4ed.São Paulo: Rosari, Universidade Anhembi Morumbi, PUC-Rio e Unesp, 2008, v. , p. -.</p> 
				<p>PEREIRA, M. A. R.; GAWAMI, Kroshow ; AZZINI, A. ; BERALDO, Antonio Ludovico . BAMBU : CARACTERÍSTICAS E APLICAÇÕES. In: Wesley Jorge Freire; Antonio Ludovico Beraldo. (Org.). TECNOLOGIAS E MATERIAIS ALTERNATIVOS DE CONSTRUÇÃO. Campinas: Editora da Unicamp, 2003, v. , p. 253-299.</p> 
				<p>PEREIRA, M. A. R.. O uso do bambu na irrigação: Montagem de um sistema de irrigação por aspersão de pequeno porte utilizando tubulação de bambu. In: UFPB/SBEA. (Org.). Materiais não Convencionais para Construções Rurais. Paraiba: UFPB/SBEA, 1997, v. , p. 293-323.</p>  -->

				<!-- incluido por m-dantas -- antigo -->
				<p>
					SASAOKA, S.; Pereira, M. A. R. . RELAÇÕES E IMPLICAÇÕES DA CADEIA PRODUTIVA DO BAMBU: UMA PERSPECTIVA CULTURAL. In: Luis Carlos Paschoarelli ; Marizilda dos Santos Menezes. (Org.). Design. Ensino, processos e comunicação. 1ed.Bauru: Canal 6, 2020, v. 1, p. 132-152.
				</p>
				<p>
					SASAOKA, S. ; SANTOS, G. F. ; BARATA, T. Q. F. ; Pereira, M.A.R . O Design de Produtos com Bambu. In: Lisiane Librelotto; Fabiano Ostapiv. (Org.). Bambu - Caminhos para o desenvolvimento Sustentável no Brasil. 1ed.Florianpolis: UFSC, 2019, v. 1, p. 151-168.
				</p>
				<p>
					SANTOS, G. F. ; Pereira, M. A. R. ; Reis, M.L. . O Design participante como opção sustentável na contemporaneidade: análises iniciais. In: Luis Carlos Paschoarelli; Marizilda dos Santos Menezes. (Org.). DESIGN CENÁRIO DIVERSOS DE PESQUISA. 1ed.Bauru: Canal 6, 2019, v. 1, p. 87-103.
				</p>
				<p>
					SANTOS, J. V. G. ; PEREIRA, M.A.R. ; BARATA, T. Q. F. . Aplicação do bambu na modelagem 3D: renderização e análise de elementos finitos. In: Renata Magagnim; Paula Landim; Maria Solange Gurgel de Castro Fontes; Fausto orsi Medola. (Org.). Interdisciplinaridade nas pesquisas em Design, Arquitetura e Urbanismo.. 1ed.Bauru: Canal 6, 2018, v. 1, p. 13-23.
				</p>
				<p>
					GODINHO, G. M. ; BARATA, T. Q. F. ; PEREIRA, M.A.R. . Design e experimentação com bambu:desenvolvimento de uma linha de óculos de sol sustentável. In: Amilton Arruda; Paulo Ferroli; Lisiane Librelotto. (Org.). Design, Artefatos e Sistema Sustentável. 1ed.São Paulo: Blucher, 2018, v. 1, p. 287-300.
				</p>
				<p>
					SANTOS, J. V. G. ; PEREIRA, M.A.R. ; MEDOLA, F. O. ; PASCHOARELLI, L. C. . Design Sustentável aolicado ao projeto de produtos assistivos (próteses) fabricados com biocompósitos. In: Amilton Arruda; Paulo Ferroli; Lisiane Librelotto. (Org.). Design, Artefatos e Sistema Sustentável. 1ed.São Paulo: Blucher, 2018, v. 1, p. 333-350.
				</p>
				<p>
					YAMADA, T. R. U. ; NASCIMENTO, R. A. ; PEREIRA, M.A.R. . Flat foldable strucuture in Glued Laminated Bamboo based on origami and kirigami design. In: Robert Lang; Mark Bolitho; Zhong You. (Org.). Origami. The proceedings from the 7th International Meeting on Origami in Science, Mathematics and Education. Volume one: Design, Education, History ans Science. 1ed.United Kingdom: Taquin, 2018, v. 1, p. 285-298.
				</p>
				<p>
					Pereira, M. A. R.. Implantação do Projeto Bambu no assentamento rural Horto de Aimorés (SP).. In: Patrícia Maria Drumond; Guilherme Wiedman. (Org.). Bambus no Brasil da biologia à tecnologia. 1ed.Rio de Janeiro: ICH - Instituto Ciência Hoje, 2017, v. 1, p. 321-334.
				</p>
				<p>
					AZAMBUJA, M. A. ; AFFONSO, S. B. A. ; Battistelle, R.A.G. ; VALARELLI, I. D. ; Pereira, M. A. R. ; SILVA, S. A. M. ; LAHR, F. A. R. . Esquadrias de bambu laminado colado. Bambus no Brasil da biologia à tecnologia. 1ed.Rio de Janeiro: ICH - Instituto Ciência Hoje, 2017, v. 1, p. 511-525.
				</p>
				<p>
					SANTOS, J. V. G. ; PEREIRA, M.A.R. ; MEDOLA, F. O. ; PASCHOARELLI, L. C. . Design sustentável aplicado ao projeto de produtos assistivos (proteses) fabricados com biocompósitos. In: Amilton J. V. Arruda; Paulo Cesar Machado Ferroli; Lisiane Ilha Liberlotto. (Org.). Design, Artefatos e Sistema Sustentável. 1ed.São Paulo: Blucher, 2017, v. 1, p. 333-350.
				</p>
				<p>
					GODINHO, G. M. ; BARATA, T. Q. F. ; PEREIRA, M. A. R. . Design e experimentação em bambu: desenvolvimento de uma linha de óculos de sol sustentável. In: Amilton J. V. Arruda; Paulo Cesar Machado Ferroli; Lisiane Ilha Liberlotto. (Org.). Design, Artefatos e Sistema Sustentável. 1ed.São Paulo: Blucher, 2017, v. 1, p. 287-300.
				</p>
				<p>
					Pereira, M. A. R.; GODINHO, G. M. ; MARINO, J. O. M. ; FUJIMORI, M. H. C. . PROJETO TAQUARA. In: Luttgardes de Oliveira Neto; Marcelo Carbone Carneiro; Paulo Noronha Lisboa Filho; Fernanda Henriques. (Org.). Extensão Universitária Diversidade e Desenvolvimento Humano. 1ed.São Paulo: Cultura Acadêmica / Editora Unesp, 2017, v. 1, p. 31-50.
				</p>
				<p>
					Carneiro, R. R. ; Pereira, M. A. R. . Bambu laminado colado termotratado: dimensões estratégicas na produção de móveis sustentáveis. In: Luis Carlos Paschoarelli ; Rosio Fernandez Baca Salcedo. (Org.). Design, Arquitetura e Urbanismo: Transversalidades. 1ed.Bauru: Canal 6, 2016, v. 1, p. 139-148.
				</p>
				<p>
					YAMADA, T. R. U. ; NASCIMENTO, R. A. ; Pereira, M.A.R . Estrutura flat foldable baseada em técnica de corte e dobra do kirigami 3D: uma pesquisa experimental. In: Luis Carlso Paschoarelli ; Rosio Fernandez Baca Salcedo. (Org.). Design, Arquitetura e Urbanismo: Transversalidades. 1ed.Bauru: Canal 6, 2016, v. 1, p. 145-155.
				</p>
				<p>
					VENTURA, F. C. ; Pereira, M.A.R ; MENEZES, M. S. . Design e arquitetura na integração social: resultados do Projeto Bambu. In: Luis Carlos Paschoarelli ; Rosio Fernandez Baca salcedo. (Org.). Design, Arquitetura e Urbanismo: Tranversalidades. 1ed.Bauru: CANAL 6, 2016, v. 1, p. 157-166.
				</p>
			
			</section>

			<section class="pesquisas">
				<h3>Dissertações e Teses</h3>
					<!-- <p>BARELLI, Breno Giordano Pensa. Design para sustentabilidade: modelo de cadeia produtiva do bambu laminado colado (BLC) e seus produtos. 2009. 131 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2009. Disponível em: <a href="http://hdl.handle.net/11449/89698">http://hdl.handle.net/11449/89698</a>.</p>
					<p>PADOVAN, Roberval Bráz. O bambu na arquitetura: desing de conexões estruturais. 2010. 181 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2010. Disponível em: <a href="http://hdl.handle.net/11449/89702">http://hdl.handle.net/11449/89702</a>.</p>
					<p>PEREIRA, Marco Antonio dos Reis. PROJETO BAMBU: INTRODUÇÃO DE ESPÉCIES, MANEJO, CARACTERIZAÇÃO E APLICAÇÕES. 2012. 200 f. Tese (livre-docência) - Universidade Estadual Paulista, Faculdade de Engenharia, 2012. Disponível em: <a href="http://hdl.handle.net/11449/106710">http://hdl.handle.net/11449/106710</a></p>
					<p>PEREIRA, Marco Antonio dos Reis. CARACTERÍSTICAS HIDRÁULICAS DE TUBOS DE BAMBU GIGANTE (Dendrocalamus giganteus). Tese (Doutorado em Agronomia)- Faculdade de Ciências Agrárias, Universidade Estadual Paulista Júlio de Mesquita Filho, UNESP. São Paulo. 1997</p>
					<p>PEREIRA, Marco Antonio dos Reis. UTILIZAÇÃO DO BAMBU PARA FINS DE IRRIGAÇÃO-ASPECTOS TÉCNICOS. Dissertação (Mestrado em Ciências Agronômicas) – Faculdade de Ciências Agrárias, Universidade Estadual Paulista Júlio de Mesquita Filho, UNESP. São Paulo. 1992</p>
					<p>RAMOS, Bruno Perazzelli Farias. Metodologia de curvatura de bambu laminado colado (BLAC) para fabricação de mobiliário: diretrizes para o design. 2014. 114 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: <a href="http://hdl.handle.net/11449/110862">http://hdl.handle.net/11449/110862</a>.</p>
					<p>SANTOS, Gabriel Fernandes dos. Design Participativo para a Sustentabilidade: desenvolvimento de painéis modulares para fechamentos, utilizando bambu associado com terra e resíduos. Tese (doutorado)- Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/137816">https://repositorio.unesp.br/handle/11449/137816</a></p>
					<p>TAKAMITSU, Helen Tatiana. O uso de bambu e metal clay no design de jóias de arte. 2011. 156 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2011. Disponível em: <a href="http://hdl.handle.net/11449/89735">http://hdl.handle.net/11449/89735</a></p>
					<p>VENTURA, Flavio Cardoso. Aplicabilidade da metodologia ecodesign à produção de calçados femininos. 2014. 91 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: 	<a href="http://hdl.handle.net/11449/110861">http://hdl.handle.net/11449/110861</a>.</p>
					<p>YAMADA, Thaís Regina Ueno. Estruturas flat foldable em bambu laminado colado baseadas em técnicas de dobra e corte do origami e do kirigami. Tese (doutorado)- Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/144520">https://repositorio.unesp.br/handle/11449/144520</a></p> -->
					
					<!-- incluido por m-dantas -->
					<!-- <p>SASAOKA, Silvia. Bambu, Design social e autonomia: uma cooperação entre universidade e comunidade local. Pesquisa de doutorado em andamento (defesa em 2022).</p>
					<p>GOMES, João V. Produção e avaliação de prótese transtibial de baixo custo constituída por biocompósitos. Pesquisa de doutorado em andamento.</p>
					<p>CARNEIRO, Rodrigo R. Bambu Laminado Termotratado: diretrizes para o design de móveis sustentáveis .Pesquisa de doutorado em andamento.</p>
					<p>SANTOS, G.F. O design participante e a tecnologia social do bambu como opções sustentáveis na contemporaneidade. Tese de doutorado. Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/214970">https://repositorio.unesp.br/handle/11449/214970</a></p>
					<p>TELLES, Patrícia Nunes: Design & sustentabilidade: compósitos poliméricos com bambu e sua empregabilidade na fabricação de mobiliário. Dissertação (mestrado). Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2021. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/204225?show=full">https://repositorio.unesp.br/handle/11449/204225?show=full</a></p>
					<p>VENTURA, Flávio Cardoso. Diretrizes para o design de componentes em bambu para calçados femininos. Tese (doutorado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2019. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/181030">https://repositorio.unesp.br/handle/11449/181030</a></p>
					<p>CARNEIRO, Rodrigo Rocha. Bambu laminado termo-tratado: metodologia aplicável na obtenção de novas tonalidades para o desenvolvimento de móveis sustentáveis. Dissertação (mestrado). Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2018. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/182180">https://repositorio.unesp.br/handle/11449/182180</a></p>
					<p>YAMADA, Thaís Regina Ueno. Estruturas flat foldable em bambu laminado colado baseadas em técnicas de dobra e corte do origami e do kirigami. Tese (doutorado)- Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/144520">https://repositorio.unesp.br/handle/11449/144520</a></p>
					<p>SANTOS, Gabriel Fernandes. Design Participativo para a Sustentabilidade: desenvolvimento de painéis modulares para fechamentos, utilizando bambu associado com terra e resíduos. Tese (doutorado) Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/137816">https://repositorio.unesp.br/handle/11449/137816</a></p>
					<p>RAMOS, Bruno Perazzelli Farias. Metodologia de curvatura de bambu laminado colado (BLAC) para fabricação de mobiliário: diretrizes para o design. 2014. 114 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: <a href="http://hdl.handle.net/11449/110862">http://hdl.handle.net/11449/110862</a></p>
					<p>VENTURA, Flavio Cardoso. Aplicabilidade da metodologia ecodesign à produção de calçados femininos. 2014. 91 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: <a href="http://hdl.handle.net/11449/110861">http://hdl.handle.net/11449/110861</a></p>
					<p>TAKAMITSU, Helen Tatiana. O uso de bambu e metal clay no design de jóias de arte. 2011. 156 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2011. Disponível em: <a href="http://hdl.handle.net/11449/89735">http://hdl.handle.net/11449/89735</a></p>
					<p>PADOVAN, Roberval Bráz. O bambu na arquitetura: desing de conexões estruturais. 2010. 181 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2010. Disponível em: <a href="http://hdl.handle.net/11449/89702">http://hdl.handle.net/11449/89702</a></p>
					<p>BARELLI, Breno Giordano Pensa. Design para sustentabilidade: modelo de cadeia produtiva do bambu laminado colado (BLC) e seus produtos. 2009. 131 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2009. Disponível em: <a href="http://hdl.handle.net/11449/89698">http://hdl.handle.net/11449/89698</a></p>
					<p>PEREIRA, Marco Antonio dos Reis. PROJETO BAMBU: INTRODUÇÃO DE ESPÉCIES, MANEJO, CARACTERIZAÇÃO E APLICAÇÕES. 2012. 200 f. Tese (livre-docência) - Universidade Estadual Paulista, Faculdade de Engenharia, 2012. Disponível em: <a href="http://hdl.handle.net/11449/106710"></a></p>
					<p>PEREIRA, Marco Antonio dos Reis. CARACTERÍSTICAS HIDRÁULICAS DE TUBOS DE BAMBU GIGANTE (Dendrocalamus giganteus). Tese (Doutorado em Agronomia)- Faculdade de Ciências Agrárias, Universidade Estadual Paulista Júlio de Mesquita Filho, UNESP. São Paulo. 1997</p> -->
					
					<!-- novo -->
					<p>
						SANTOS, G.F. O design participante e a tecnologia social do bambu como opções sustentáveis na contemporaneidade. Tese de doutorado. Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação. Disponível em: 
						<a href="https://repositorio.unesp.br/handle/11449/214970">https://repositorio.unesp.br/handle/11449/214970</a>.
					</p>
					<p>
						BARELLI, Breno Giordano Pensa. Design para sustentabilidade: modelo de cadeia produtiva do bambu laminado colado (BLC) e seus produtos. 2009. 131 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2009. Disponível em: 
						<a href="http://hdl.handle.net/11449/89698">http://hdl.handle.net/11449/89698</a>.
					</p>
					<p>
						PADOVAN, Roberval Bráz. O bambu na arquitetura: desing de conexões estruturais. 2010. 181 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2010. Disponível em: 
						<a href="http://hdl.handle.net/11449/89702">http://hdl.handle.net/11449/89702</a>.
					</p>
					<p>
						PEREIRA, Marco Antonio dos Reis. PROJETO BAMBU: INTRODUÇÃO DE ESPÉCIES, MANEJO, CARACTERIZAÇÃO E APLICAÇÕES. 2012. 200 f. Tese (livre-docência) - Universidade Estadual Paulista, Faculdade de Engenharia, 2012. Disponível em: 
						<a href="http://hdl.handle.net/11449/106710">http://hdl.handle.net/11449/106710</a>.
					</p>
					<p>
						PEREIRA, Marco Antonio dos Reis. CARACTERÍSTICAS HIDRÁULICAS DE TUBOS DE BAMBU GIGANTE (Dendrocalamus giganteus). Tese (Doutorado em Agronomia)- Faculdade de Ciências Agrárias, Universidade Estadual Paulista Júlio de Mesquita Filho, UNESP. São Paulo. 1997
					</p>
					<p>
						PEREIRA, Marco Antonio dos Reis. UTILIZAÇÃO DO BAMBU PARA FINS DE IRRIGAÇÃO-ASPECTOS TÉCNICOS. Dissertação (Mestrado em Ciências Agronômicas) – Faculdade de Ciências Agrárias, Universidade Estadual Paulista Júlio de Mesquita Filho, UNESP. São Paulo. 1992
					</p>
					<p>
						RAMOS, Bruno Perazzelli Farias. Metodologia de curvatura de bambu laminado colado (BLAC) para fabricação de mobiliário: diretrizes para o design. 2014. 114 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: 
						<a href="http://hdl.handle.net/11449/110862">http://hdl.handle.net/11449/110862</a>.
					</p>
					<p>
						SANTOS, Gabriel Fernandes. Design Participativo para a Sustentabilidade: desenvolvimento de painéis modulares para fechamentos, utilizando bambu associado com terra e resíduos. Tese (doutorado) Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: 
						<a href="https://repositorio.unesp.br/handle/11449/137816">https://repositorio.unesp.br/handle/11449/137816</a>.
					</p>
					<p>
						TAKAMITSU, Helen Tatiana. O uso de bambu e metal clay no design de jóias de arte. 2011. 156 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2011. Disponível em: 
						<a href="http://hdl.handle.net/11449/89735">http://hdl.handle.net/11449/89735</a>.
					</p>
					<p>
						VENTURA, Flavio Cardoso. Aplicabilidade da metodologia ecodesign à produção de calçados femininos. 2014. 91 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. 
						<a href="http://hdl.handle.net/11449/110861">http://hdl.handle.net/11449/110861</a>.
					</p>
					<p>
						YAMADA, Thaís Regina Ueno. Estruturas flat foldable em bambu laminado colado baseadas em técnicas de dobra e corte do origami e do kirigami. Tese (doutorado)- Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: 
						<a href="https://repositorio.unesp.br/handle/11449/144520">https://repositorio.unesp.br/handle/11449/144520</a>.
					</p>
					<p>
						VENTURA, Flávio Cardoso. Diretrizes para o design de componentes em bambu para calçados femininos. Tese (doutorado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2019. Disponível em: 
						<a href="https://repositorio.unesp.br/handle/11449/181030">https://repositorio.unesp.br/handle/11449/181030</a>
					</p>
					<p>
						CARNEIRO, Rodrigo Rocha. Bambu laminado termo-tratado: metodologia aplicável na obtenção de novas tonalidades para o desenvolvimento de móveis sustentáveis. Dissertação (mestrado). Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2018. Disponível em: 
						<a href="https://repositorio.unesp.br/handle/11449/182180">https://repositorio.unesp.br/handle/11449/182180</a>.
					</p>
					<p>
						TELLES, Patrícia Nunes: Design & sustentabilidade: compósitos poliméricos com bambu e sua empregabilidade na fabricação de mobiliário. Dissertação (mestrado). Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2021. Disponível em: 
						<a href="https://repositorio.unesp.br/handle/11449/204225?show=full">https://repositorio.unesp.br/handle/11449/204225?show=full</a>.
					</p>
					<p>
						SASAOKA, Silvia. Bambu, Design social e autonomia: uma cooperação entre universidade e comunidade local. Pesquisa de doutorado em andamento.
					</p>
					<p>
						GOMES, João Vitor. Produção e avaliação de prótese transtibial de baixo custo constituída por biocompósitos. Pesquisa de doutorado em andamento. 
					</p>
					<p>
						CARNEIRO, Rodrigo Rocha. Bambu Laminado Termotratado: diretrizes para o design de móveis sustentáveis. Pesquisa de doutorado em andamento. 
					</p>
			</section>

			<section class="artigos-periodicos">
				<h3>Artigos em Periódicos</h3>
				<p>OSORIO, P. A. M. ; LANDIM, P. C. ; BARATA, T. Q. F. ; Pereira, M. A. R. . Tingimento natural eco-friendly de ripas de bambu com Curcuma longa. KEPES, v. 14, p. 437-457, 2020.</p>
				<p>SANTOS, G.F. ; SASAOKA, S ; DOS REIS PEREIRA, MARCO ANTONIO . O Assentamento Rural Horto Aimorés e a Extensão Universitária do Projeto Bambu: um estudo de caso. CUADERNOS DEL CENTRO DE ESTUDIOS DE DISEÑO Y COMUNICACIÓN, v. 1, p. 121-147, 2020.</p>
				<p>SANTOS, G. F. ; SASAOKA, S. ; PEREIRA, M. A. R. . O Assentamento Rural Horto de Aimorés e a Extensão Universitária do projeto Bambu. CUADERNOS DEL CENTRO DE ESTUDIOS DE DISEÑO Y COMUNICACIÓN, 2019.</p>
				<p>PASCHOARELLI, L. C. ; SANTOS, G. ; PEREIRA, MARCO A.R . Aplicação de materiais sustentáveis no design de artefatos de uso cotidiano: o caso do cabo de tesoura em bambu laminado. DESIGN E TECNOLOGIA, v. 9, p. 20-29, 2019.</p>
				<p>SASAOKA, S. ; PEREIRA, M.A.R. ; SANTOS, Gabriel Fernandes . O pífano de bambu: o músico artífice de seu instrumento. Brazilian Journal of Development, v. 5, p. 12519-12537, 2019.</p>
				<p>UENO, T. R. ; NASCIMENTO, R. A. do ; PEREIRA, M.A.R. . Desenvolvimento de uma estrutura Flat Foldable em Bambu Laminado Colado baseada no Padrão Miura-Ori. ESTUDOS EM DESIGN (ONLINE), v. 25, p. 1-24, 2017.</p>
				<p>SANTOS, Gabriel Fernandes ; PEREIRA, M.A.R. . Design participativo para la innovación social. Procesos Urbanos, v. 4, p. 180-201, 2017. YAMADA, T. R. U. ; NASCIMENTO, R. A. ; PEREIRA, M. A. R. . Desenvolvimento de uma Estrutura Flat Foldable em Bambu Laminado Colado baseada no Padrão Miura-Ori. ESTUDOS EM DESIGN (ONLINE), v. 25 n2, p. 1-24, 2017.</p>
				<p>YAMADA, T. R. U. ; NASCIMENTO, R. A. ; PEREIRA, M. A. R. . Desenvolvimento de uma Estrutura Flat Foldable em Bambu Laminado Colado baseada no Padrão Miura-Ori. ESTUDOS EM DESIGN (ONLINE), v. 25 n2, p. 1-24, 2017.</p>
				<p>WECKWERTH, N. V. B. ; WECKWERTH, P. H. ; DUARTE, M. A. H. ; CESARIO, F. ; RIVERA-PENA, M. E. ; NEVES, F. T. ; Pereira, M.A.R. ; VIVAN, R. R. . Avaliação do pH, liberação de íons cálcio e atividade antimicrobiana do cimento Portland associado a Bambusa textilis em diferentes proporções. SALUSVITA: REVISTA DA AREA DE CIENCIAS BIOLOGICAS E DA SAUDE, v. 36, p. 365-379, 2017.</p>
				<p>Pereira, M.A.R; BARATA, T. Q. F.. Bamboo as sustainable material used in design and civil construction: species, management, characterization and applications. Key Engineering Materials , v. 634(2015), p. 339-350, 2015. </p>
				<p>PEREIRA, Marco A.R.; BARATA, TOMAS Q.F. Bamboo as Sustainable Material Used in Design and Civil Construction: Species, Management, Characterization and Applications. Key Engineering Materials (Online) , v. 634, p. 339-350, 2014.</p>
				<p>RAMOS, B. P. F. ; Pereira, M.A.R. . O Uso do Bambu Laminado Colado na Confecção de Mobiliário. Estudos em Design (Online), v. 22.1, p. 1-6, 2014.</p>
				<p>VENTURA, F. C. ; RAMOS, B. P. F. ; Pereira, M.A.R. . Verification of Applicability of the Polyurethane Adhesive Based on Castor Oil in the Manufacture of Glued Laminated Bamboo. Journal of Chemistry and Chemical Engineering, v. 8, p. 898-905, 2014.</p>
				<p>PEREIRA, M. A. R.; CARRARA, H. B. ; BARATA, T. Q. F. ; VALARELLI, Ivaldo de Domenico ; AZAMBUJA, M. A. . Projeto de Produção e Processo de Pré-fabricação de Componentes de Bambu. Floresta e Ambiente, v. 19, p. 200-209, 2012.</p>
				<p>SILVA, M. A. ; RODER1, M. A. ; PEREIRA, M.A.R. ; NEVES1, F. T. A. ; CONSTANTINO, D. . Avaliação farmacognóstica qualitativa das folhas do vegetal Bambusa textilis. Revista Salusvita (Online), v. 31, p. 237-246, 2012.</p>
				<p>PEREIRA, M.A.R.; CARRARA, H. B. ; BARARA, T.Q.F. ; VALARELLI, I. D. ; AZAMBUJA, M. A. . Projeto de Produção e Processo de Pré-fabricação de componentes de Bambu. Floresta e Ambiente, v. 19, p. 200-209, 2012.</p>
				<p>SANTOS, G. F. ; PEREIRA, M. A. R. . Desenvolvimento de produtos artesanais em bambu e em bambu laminado colado e a transferencia desse conhecimentopara a comunidade do Assentamento Rural Horto de Aimorés. Revista Ciência em Extensão, v. 7, p. 148-148, 2011.</p>
				<p>PEREIRA, M. A. R.; Carneiro, R. R. ; RAMOS, B. P. F. . Desenvolvimento de produtos artesanais em bambu e em bambu laminado colado, e a transferência desse conhecimento para a comunidade do assentamento rural Horto de Aimorés. Revista Ciência em Extensão, v. 6, p. 159-159, 2010.</p>
				<p>GALHIANE, M S ; RISSATO, S R ; PEREIRA, M. A. R. ; ALMEIDA, Marcos Vinícius de ; SILVA, L C da . Evaluation of the effects of different extraction methods for main volatile compounds from Bambusa textilis leaves. Journal of Bamboo and Rattan, VSP - Holanda, v. 4, n.3, p. 243-250, 2005.</p>
				<p>PEREIRA, M. A. R.. Determinação de características físicas do bambu gigante laminado (Dendrocalamus giganteus) cultivado na Unesp/Campus de Bauru. Revista Madeira, v. 18, p. 1-15, 2006.</p>
				<p>PEREIRA, M. A. R.. Características Hidráulicas de Tubos de Bambu Gigante. Engenharia Agrícola , Jaboticabal, v. 21, n.1, p. 32-42, 2002.</p>
				<p>PEREIRA, M. A. R.; SOUSA, A. P. . Hidráulica de tubos de bambu : Coeficiente C de Hazen-Williams. Irriga (Botucatu), FCA-Unesp-Botucatu, v. 4, n.2, p. 120-138, 1999.</p>
			</section>

			<section class="pesquisas">
				<h3>Tcc Trabalho de Conclusão de Curso</h3>
				<!-- <p>Eduardo Miguel Marques. Relatório final de projeto de extensão. Graduação Engenharia Civil e Ambiental Unesp Bauru. 2017.</p>
				<p>Livia Garcia Ferrari. Design sustentável com bambu (Projeto de geração de renda para o Assentamento Rural Horto de Aimorés). Graduação em Design. 2012. </p>
				<p>Mariana Lourenço. Relatório final: bambu e sustentabilidade: análise comparativa entre três processos de produção de mobiliário. Graduação Engenharia Mecânica Unesp Bauru. 2011. </p>
				<p>Pedro Alexandre Aniceto. Treliça espacial com peças-sistema de bambu in natura. Graduação em Arquitetura da FAAC Unesp Bauru. 2017. </p>
				<p>Rodrigo Domingos Borges. Determinação da densidade aparente ao longo do internó, em três diferentes alturas do colmo. Graduação Engenharia Mecânica Unesp Bauru.</p> -->
				
				<!-- incluido por m-dantas -->
				<p>Eduardo Miguel Marques. Relatório final de projeto de extensão. Graduação Engenharia Civil e Ambiental Unesp Bauru. 2017.</p>
				<p>Livia Garcia Ferrari. Design sustentável com bambu (Projeto de geração de renda para o Assentamento Rural Horto de Aimorés). Graduação em Design. 2012.</p>
				<p>Mariana Lourenço. Relatório final: bambu e sustentabilidade: análise comparativa entre três processos de produção de mobiliário. Graduação Engenharia Mecânica Unesp Bauru. 2011.</p>
				<p>Pedro Alexandre Aniceto. Treliça espacial com peças-sistema de bambu in natura. Graduação em Arquitetura da FAAC Unesp Bauru. 2017.</p>
				<p>Rodrigo Domingos Borges. Determinação da densidade aparente ao longo do internó, em três diferentes alturas do colmo. Graduação Engenharia Mecânica Unesp Bauru.</p>
			</section>

			<section class="pesquisas">
				<h3>Iniciação científica</h3>
				<!-- <p>Rodrigo Rocha Carneiro -  2009-2010  Design Sustentável com Bambu (Projeto de geração de renda para o Assentamento Rural Terra Nossa)</p>
				<p>Sabrina Saboya Antunes - 2010-2011   Design Sustentável com Bambu (Projeto de geração de renda para o Assentamento Rural Terra Nossa)</p>
				<p>Camila Gondo - 2011-2012 - Implantação Do Projeto Bambu No Assentamento Rural Horto De Aimorés</p>
				<p>Livia Garcia Ferrari - 2012-2013 - Design Sustentável com Bambu (Projeto de geração de renda para o Assentamento Rural Terra Nossa)</p>
				<p>Giulianna de Moraes Godinho 2014 - 2015 Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
				<p>José Octávio Marinelli Marino - 2015-2016 Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
				<p>Tulio Sacchi Santos - 2016-2017 - Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
				<p>Guilherme Barbosa dos Santos - 2017-2018 - Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p> -->

				<!-- incluido por m-dantas -->
				<p>Rodrigo Rocha Carneiro - 2009-2010 Design Sustentável com Bambu (Projeto de geração de renda para o Assentamento Rural Terra Nossa)</p>
				<p>Sabrina Saboya Antunes - 2010-2011 Design Sustentável com Bambu (Projeto de geração de renda para o Assentamento Rural Terra Nossa)</p>
				<p>Camila Gondo - 2011-2012 - Implantação Do Projeto Bambu No Assentamento Rural Horto De Aimorés</p>
				<p>Livia Garcia Ferrari - 2012-2013 - Design Sustentável com Bambu (Projeto de geração de renda para o Assentamento Rural Terra Nossa)</p>
				<p>Giulianna de Moraes Godinho 2014 - 2015 Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
				<p>José Octávio Marinelli Marino - 2015-2016 Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
				<p>Tulio Sacchi Santos - 2016-2017 - Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
				<p>Guilherme Barbosa dos Santos - 2017-2018 - Design Sustentável com Bambu (Capacitação e geração de renda para comunidades)</p>
			</section>

			<!-- <section class="pesquisas">
				<h3>Pesquisa de Mestrado e Doutorado em andamento</h3>
				<p>Flávio Cardoso Ventura. Pesquisa de doutorado: Diretrizes para o design de componentes em bambu para calçados femininos.</p>
				<p>Gabriel Fernandes do Santos. Pesquisa de doutorado: Design participativo para o bem-estar em comunidades carentes.</p>
				<p>João Victor Gomes. Pesquisa de mestrado: Produção e avaliação de prótese transtibial de baixo custo constituída por biocompósitos.</p>
				<p>Rodrigo Rocha. Pesquisa de mestrado: Bambu laminado termo-tratado: metodologias aplicáveis para a obtenção de novas tonalidades.</p>
				<p>Patrícia Nunes Telles. Pesquisa de mestrado: Design sustentável: materiais e processos inovadores. Compósitos em fibra de bambu e sua empregabilidade na fabricação de mobiliário. </p>
				<p>Silvia Sasaoka: Pesquisa de doutorado: Design, uma didática na qualificação técnica e estética do artesão de bambu.</p>
			</section>	 -->


		</TheContent>
		<NavBottom :routesDefs="routesDefs"></NavBottom>

	</div>
</template>

<script>
import TheContent from '@/components/TheContent.vue'
import Gallery from '@/components/Gallery.vue'
import { pageviews } from '@/mixins/pageviews'
import NavBottom from '@/components/NavBottom.vue'
import HeroTitle from '@/components/HeroTitle.vue'

export default{
	name:'Publicacoes',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/videos', 
					name:'Vídeos'
				},
				previous: {
					to: '/produtos',
					name: 'Produtos'
				}
			}
		}
	},
	mixins:[ pageviews ],
	components:{
		TheContent,
		Gallery, 
		NavBottom,
		HeroTitle
	}
}
</script>

<style lang="scss" scoped>
div.gallery {
	max-width: 35%;
}
.gallery {
	columns: 600px;
	display: flex;
    justify-content: center;
    width: 100%;
}


</style>
