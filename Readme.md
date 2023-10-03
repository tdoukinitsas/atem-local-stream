# Local RTMP server relay, tuned for Blackmagic ATEM Devices.

A quick and hacky way to get a clean output out of the atem mini pro, whilst also using the multiviewer and recording capabilities that are built in.

## Prerequisites

You need node.js installed. Then once you've cloned / downloaded the repo, command line in to it and type


```
npm install
```

## Step 1

Edit the sampleatemconfig.xml, and replace `<SERVERIP>` with the IP address of the PC/Mac running the server.

## Step 2

In your own xml file created using the atem software control, go down to the bottom of the file and replace the LiveStream tag with what's in the edited sampleatemconfig.xml. Then restore it in Atem Software Control. You should now see a "Local Stream" option in your stream settings

## Step 3

run the following command in a terminal:

```
node index.js
```

## Step 4

Start the stream on your Atem device

## Step 5

Access the stream using VLC or a similar software at:

```
rtmp://localhost/live/ATEM
```