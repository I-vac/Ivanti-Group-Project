package com.ivantiWebApp.server.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Package {

    @Id
    private String id;
    private String title;
    private String description;
    private String installDescription;
    private String version;

    public Package(String title, String description, String installDescription, String version) {
        this.title = title;
        this.description = description;
        this.installDescription = installDescription;
        this.version = version;
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

    public String getInstallDescription() {
        return installDescription;
    }

    public void setInstallDescription(String installDescription) {
        this.installDescription = installDescription;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
