package com.maneira.mongoproject.demo.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;

@Service
public class S3Service {

    private final AmazonS3 amazonS3;
    @Value("${aws.s3.mmb-images}")
    private String bucketName;

    public S3Service(AmazonS3 amazonS3) {
        this.amazonS3 = amazonS3;
    }

    public String uploadFile(File file) {
        String fileName = file.getName();
        amazonS3.putObject(new PutObjectRequest(bucketName, fileName, file));
        return amazonS3.getUrl(bucketName, fileName).toString();
    }

    public S3Object downloadFile(String fileName) {
        return amazonS3.getObject(bucketName, fileName);
    }
}
