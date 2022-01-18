package com.ivantiWebApp.server.DTO;

import com.ivantiWebApp.server.Model.ContentCreator;

public interface PackageDTO {
    String getId();
    String getDescription();
    String getTitle();
    ContentCreator getContentCreator();
    String getFileId();
}
