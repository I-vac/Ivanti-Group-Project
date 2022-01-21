package com.ivantiWebApp.server;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.ivantiWebApp.server.Model.Category;
import com.ivantiWebApp.server.Model.ContentCreator;
import com.ivantiWebApp.server.Model.Package;
import com.ivantiWebApp.server.Repository.PackageRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import static org.hamcrest.Matchers.containsString;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
public class PackagesControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PackageRepository repository;

    @Test
    public void PackageCreation() throws Exception {
        ContentCreator contentCreator = new ContentCreator(null,null,null);
        Category category = new Category(null,null);
        Package pack = new Package(contentCreator,"title","Description",category,"FileId","OS","Installdesc",null);
        ObjectWriter pack0 = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String content = pack0.writeValueAsString(pack);

        this.mockMvc.perform(post("/api/packages/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content))
                .andExpect(status().isOk());
    }

    @Test
    public void GetAllPackage() throws Exception {
        this.mockMvc.perform(get("/api/packages/all"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("title")));
    }



}
