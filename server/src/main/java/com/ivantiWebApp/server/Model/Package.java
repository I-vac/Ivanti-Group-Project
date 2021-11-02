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

    public Package(ContentCreator contentCreator, String title, String description) {
        this.contentCreator = contentCreator;
        this.title = title;
        this.description = description;
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
}
