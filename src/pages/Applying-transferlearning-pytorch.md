---
title: Applying Transfer Learning on ResNet using PyTorch
date: "2018-04-06"
---

<div align="center">
    <br />
    <br />
    <img src="https://www.dropbox.com/s/agb73ch2afnuy2r/transfer_learning.jpg?raw=1"><br /><br />
</div>

Recently I've wrote a Classifier that is able to distinguish dogs from cats. 

Things I've learnt:
0. How to use a Pretrained Model
1. Apply Transfer Learning 

## DATASET

I've trained the model using Kaggle's classic dogs vs. cats dataset. The dataset can be found [here](https://www.kaggle.com/c/dogs-vs-cats/data)

Well, I have to say it's not plug and play. Atleast not for the `torchvision` APIs. `torchvision` has a `ImageFolder` thats (right now) the standard to load images as well as it's labels automatically. The document suggests that `ImageFolder` requires the dataset in the following format:

```bash
root/dog/xxx.png
root/dog/xxy.png
root/dog/xxz.png

root/cat/123.png
root/cat/nsdf3.png
root/cat/asd932_.png
```

So, I've arranged the dataset as the `ImageFolder` requires me to.

## Model

The choice is arbitrary. I've considered some wired model. I don't know what to name it. 

```python
self.conv1 = nn.Conv2d(3, 8, 5)
self.pool = nn.MaxPool(2, 2)
self.conv2 = nn.Conv2d(8, 16, 3)
self.conv3 = nn.Conv2d(16, 32, 3)
self.conv4 = nn.Conv2d(32, 64, 3)
self.conv5 = nn.Conv2d(64, 64, 3)

self.fc1 = nn.Linear(64 * 5 * 5, 1000)
self.fc2 = nn.Linear(1000, 500)
self.fc3 = nn.Linear(500, 120)
self.fc4 = nn.Linear(120, 84)
self.fc5 = nn.Linear(84, 10)
self.fc6 = nn.Linear(10, 2)
```
With ReLu everywhere and softmax layer at the end. It worked but not as I thought its gonna be. And its still smaller than starter ResNet which is ResNet18. So, I've considered ResNet18 over my network.

## Training

I've considered to train my ResNet18 for the whole dataset. But the main problem is I don't have a GPU. (ノಠ益ಠ)ノ彡┻━┻

So Transfer Learning is the only choice I've got. I've opted for a pretrained Model which is trained on a ImageNet. 

Choices I've got:
0. Full Pretrained Model
1. Fine-Tuning the ConvNet
2. ConvNet as fixed feature extractor

### Full Pretrained Model
I've got to tell you that using this is of no use. It just works. You don't have to do anything. You just have to write the predict function.

### Fine-Tuning the ConvNet
Taking the whole network and retraining the parameters just looked cool and painful too. Well this one worked really good. The results were good too. It took so much time to train the model than I've thought it would take. I've trained the model but forgot to save it. I trained it another time though. But the time consumption was really too much.

### ConvNet as fixed feature extractor
Taking the whole network and adding a final layer and training just the last layer with softmax has done the job. The results are as expected. And also, It takes too less time compared to Full training and Fine-Tuning the ConvNet. The results are almost equal to the Fine-Tuning technique.

## Predictions

I've got more than 91% of accuracy. 


<div align="center">
    <br />
    <br />
    <img src="https://www.dropbox.com/s/k842le5vb74og5y/cnn1.png?raw=1"><br /><br />
</div>

I've tried some dog filter on [praveen](https://twitter.com/praneshbalu7) just to check whether it is able to classify him correctly. Well, it has classified him as a `cat` though. Look likes there's even more to do. ┬──┬ ノ( ゜-゜ノ)

<div align="center">
    <br />
    <br />
    <img src="https://www.dropbox.com/s/31p6pfvd58fld4f/cnn2.png?raw=1"><br /><br />
</div>

## Useful Links
* [Transfer Learning](https://cs231n.github.io/transfer-learning/)
* [Resnet](https://arxiv.org/pdf/1512.03385.pdf)
* [Visualizing and Understanding Convolutional Networks](https://arxiv.org/pdf/1311.2901.pdf)
* [PyTorch](http://pytorch.org/docs/0.3.1/)
