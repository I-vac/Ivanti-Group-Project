package com.ivantiWebApp.server.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Package {

    @Id
    private String id;
    private ContentCreator contentCreator;
    private String title;
    private String description;
    private String fileId;
    private Category category;
    private String installDesc;
    private String os;

    public Package(ContentCreator contentCreator, String title, String description, Category category, String fileId, String os, String installDesc) {
        this.contentCreator = contentCreator;
        this.title = title;
        this.description = description;
        this.category = category;
        this.fileId = fileId;
        this.installDesc = installDesc;
        this.os = os;
    }

    public ContentCreator getContentCreator() {
        return contentCreator;
    }

    public void setContentCreator(ContentCreator contentCreator) {
        this.contentCreator = contentCreator;
    }

    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory(){return category;}

    public void setCategory(Category category){this.category = category;}

    public String getFileLoad() {return fileId; }

    public void setFileLoad(String fileId) {
        this.fileId = fileId;
    }
}
