package com.ivantiWebApp.server.DTO;

import com.ivantiWebApp.server.Model.ContentCreator;

import java.util.*;

public interface PackageDTO {
    String getId();
    String getDescription();
    String getTitle();
    ContentCreator getContentCreator();
    String getFileId();
    String getInstallDesc();
    String getOs();
    Date getDateCreated();
}
