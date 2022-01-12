package com.ivantiWebApp.server.DTO;

import com.ivantiWebApp.server.Model.ContentCreator;

public interface PackageDTO {
    String getId();
    String getTitle();
    ContentCreator getContentCreator();
}
