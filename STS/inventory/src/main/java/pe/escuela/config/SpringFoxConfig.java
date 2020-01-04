package pe.escuela.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SpringFoxConfig {        
	
	private ApiInfo apiInfo() {
        return new ApiInfo(
                "Escuela API",
                "Sistema de escuela.",
                "v1",
                "https://www.realplaza.pe/",
                new Contact("Real Plaza", "https://www.realplaza.pe/", "contact@realplaza.com.pe"),
                "License of API", "https://opensource.org/licenses/MIT", Collections.emptyList());
    }
	
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
		  .apiInfo(apiInfo())
          .select()      
//          .apis(RequestHandlerSelectors.any())              
          .apis(RequestHandlerSelectors.basePackage("pe.escuela.controller"))
          .paths(PathSelectors.any())                          
          .build();                                           
    }
    
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
          .addResourceLocations("classpath:/META-INF/resources/");
     
        registry.addResourceHandler("/webjars/**")
          .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}