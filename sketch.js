var naruto, sasuke, kakashi, character;
var ground, groundImg, banner, startButton, ramen, shuriken, kunai, cloud1, cloudsGroup, weapon;
var fire, sharingan, rasengan, chidori, chidoriImg, rasenganImg;
var START = 1, PLAY = 2, PLAY2 = 3, PLAY3 = 4, PLAY5 = 5, END = 6, gameState = START;
var kunaiImg, shurikenImg, ramenImg, narutoImg, narutoImg2, sasukeImg, sasukeImg2, kakashiImg, bannerImg, startingImg;
var kakashiGroup, weaponGroup, ramenGroup, attackGroup, startButtom, cloudImg;
var energy = 2, points = 0, enemyGroup, enemyAttackGroup;
var sasukeImg3, narutoImg3, enemyAttack, enemyAttackImg, enemyAttackImg2;
var itachi, garaa, itachiImg, itachiImg2, garaaImg, garaaImg2, life = 3;
var finalImg,continueImg,backImg,finalImg2,newForm1,newForm2;
var toBecont,background2,final1,final2,sasukeSound,narutoSound,windStyle,sharinganStyle;
function preload() {
    sasukeSound = loadSound("sasuke.mp3");
    narutoSound = loadSound("naruto.mp3");
    kunaiImg = loadImage("kunai.png");
    shurikenImg = loadImage("shuriken.png");
    ramenImg = loadImage("ramen.png");
    sasukeImg = loadImage("SasukeN.png");
    narutoImg = loadImage("front.png");
    narutoImg2 = loadImage("narutoSide.png");
    sasukeImg2 = loadImage("sasukeSide.png");
    kakashiImg = loadImage("kakashiNor.png");
    rasenganImg = loadImage("rasengan1.png");
    chidoriImg = loadImage("chidori.png");
    bannerImg = loadImage("gameOPen.png");
    startingImg = loadImage("start.png");
    cloudImg = loadImage("cloud.png");
    groundImg = loadImage("ground.png");
    narutoImg4 = loadImage("NarutoCool.png");
    narutoImg3 = loadImage("rasengan.png");
    narutoImg5 = loadImage("newForm.png");
    newFormImg = loadImage("ninetails.png");
    sasukeImg3 = loadImage("veryveryCool.png");
    sasukeImg4 = loadImage("sasuke2.png");
    finalImg = loadImage("SN.png");
    finalImg2 = loadImage("NS.png");
    continueImg = loadImage("countinue.png");
    backImg = loadImage("FINAL.jpg");
    sharinganStyle = loadImage("susano.png");
    windStyle = loadImage("windRasen.png");

}

function setup() {
    createCanvas(windowWidth, 450);
    gameState = START;
    ground = createSprite(windowWidth / 2, 425, windowWidth * 2, 50);
    //ground.debug = true;
    ground.addImage(groundImg);
    ground.setCollider("rectangle", 0, 0, windowWidth * 2, 80);
    ground.scale = 0.55;

    naruto = createSprite(200, 200, 200, 200);
    //naruto.debug = true;
    naruto.setCollider("circle", 0, 0, 400);
    naruto.addImage(narutoImg);
    naruto.scale = 0.3;

    sasuke = createSprite(windowWidth - 200, 200, 200, 200);
    //sasuke.debug = true;
    sasuke.setCollider("circle", 0, 0, 400);
    sasuke.addImage(sasukeImg);
    sasuke.scale = 0.2;

    banner = createSprite(windowWidth / 2, height / 2, 200, 100);
    banner.lifetime = 100;
    banner.addImage(bannerImg);
    banner.scale = 0.5;

    kunai = createSprite(350, 135, 20, 20);
    kunai.addImage(kunaiImg);
    kunai.scale = 0.2;
    kunai.visible = false;

    shuriken = createSprite(500, 135);
    shuriken.addImage(shurikenImg);
    shuriken.scale = 0.05;
    shuriken.visible = false;

    startButton = createSprite(400, 330);
    startButton.scale = 0.3;
    startButton.addImage(startingImg);
    startButton.visible = false;

    ramen = createSprite(860, 135, 20, 20);
    ramen.addImage(ramenImg);
    ramen.scale = 0.3;
    ramen.visible = false;

    cloudsGroup = new Group();
    kakashiGroup = new Group();
    weaponGroup = new Group();
    ramenGroup = new Group();
    attackGroup = new Group();
    enemyGroup = new Group();
    enemyAttackGroup = new Group();
    newForm1=createSprite(windowWidth / 2, height / 2, 200, 200);
    newForm2=createSprite(windowWidth / 2, height / 2, 200, 200);
    newForm1.visible=false;
    newForm2.visible=false;
}

function draw() {
    background("skyBlue");
    textSize(15); stroke(0); fill(225); text("ENERGY: " + energy, windowWidth - 200, 40); text("POINTS: " + points, windowWidth - 200, 20);

    if (gameState === START) {
        stroke(0); textSize(20); fill(225); text("Choose one character", windowWidth / 2 - 100, height / 2);

        if (mousePressedOver(naruto)) {
            gameState = PLAY;
            sasuke.destroy();
            character = 1;
            naruto.scale = 0.3;
            narutoSound.play();
        }
        if (mousePressedOver(sasuke)) {
            gameState = PLAY;
            naruto.destroy();
            character = 2;
            sasuke.scale = 0.3;
            sasukeSound.play();
        }
    }
    if (gameState > 1) {
        if (character === 1) {
            naruto.velocityY = naruto.velocityY + 0.9;
            naruto.collide(ground);
        }
        if (character === 2) {
            sasuke.velocityY = sasuke.velocityY + 0.9;
            sasuke.collide(ground);
        }
    }

    if (gameState === PLAY) {
        banner.destroy();
        if (character === 1) {
            naruto.setCollider("circle", 0, 0, 200);
            naruto.addImage(narutoImg2);
            naruto.scale = 0.3;
        }
        if (character === 2) {
            sasuke.addImage(sasukeImg2);
            sasuke.scale = 0.075;
            sasuke.setCollider("circle", -125, -150, 1000);
        }

        startButton.visible = true;
        ramen.visible = true;
        shuriken.visible = true;
        kunai.visible = true;

        textSize(20); text("press space to jump", 100, 100);
        text("dodge the obstacle like", 100, 140);
        text("and this", 400, 140);
        text("to gain chakra(energy) collect", 550, 140);
        text("attack opponents by pressing enter,the second version of this game will have 1 on 1 battles", 100, 190);
        text("press s to use special attacks after gaining 3 points(wind style rasengan for naruto,sharingan for sasuke)", 100, 230);
        text("this is the 1st version,so like for part2,the game gets over at score 9))", 100, 260);

        if (gameState > 1 && mousePressedOver(startButton)) {
            gameState = PLAY2;
            startButton.destroy();
            shuriken.destroy();
            kunai.destroy();
            ramen.destroy();
        }

    }

    if (gameState === PLAY2) {

        if (character === 1) {
            naruto.setCollider("circle", 50, -50, 240);
            //naruto.addImage();

            movingBg();
            spawnClouds();

            if (keyDown("space") && naruto.y > 200) {
                naruto.velocityY = -12;
            }
            if (frameCount % 300 === 0) {
                makeKakashi();
            }
            if (frameCount % 136 === 0) {
                makeWeapon();
            }
            if (frameCount % 50 === 0) {
                makeRamen();
            }
            if (ramenGroup.isTouching(naruto)) {
                ramenGroup.destroyEach();
                energy = energy + 3;
            }
            if (keyDown("enter") && energy > 1) {
                attack();
                energy = energy - 2;
                naruto.addImage(narutoImg3);
                if(points>4){
                    naruto.addImage(narutoImg4);
                }
            }
            if (keyDown("s")&&energy>2&&points>2) {
                attack();
                rasengan.addImage(windStyle);
                energy = energy - 3;
                rasengan.scale=0.5;
                    ramenGroup.destroyEach();
                    weaponGroup.destroyEach();
                if (points > 2) {
                    naruto.addImage(narutoImg4);
                }
            }
            if (keyWentUp("enter")||keyWentUp("s")) {
                naruto.addImage(narutoImg2);
            }
            if (weaponGroup.isTouching(naruto) || kakashiGroup.isTouching(naruto)) {
                gameState = END;
            }

        }

        if (character === 2) {




            movingBg2();
            spawnClouds();

            if (keyDown("space") && sasuke.y > 200) {
                sasuke.velocityY = -12;
            }
            if (frameCount % 400 === 0) {
                makeKakashi();
            }
            if (frameCount % 136 === 0) {
                makeWeapon();
            }
            if (frameCount % 50 === 0) {
                makeRamen();
            }
            if (ramenGroup.isTouching(sasuke)) {
                ramenGroup.destroyEach();
                energy = energy + 3;
            }
            if (keyDown("enter") && energy > 1) {
                attack();
                energy = energy - 2;
                sasuke.addImage(sasukeImg3);
                sasuke.scale = 0.5;
                sasuke.setCollider("circle", 0, 0, 200);
            }
            if (keyDown("s") && energy > 2 && points > 2){
                attack();
                chidori.addImage(sharinganStyle);
                energy = energy-3;
                chidori.scale=0.9;
                chidori.velocityX = 0;
                chidori.X = sasuke.x;
                chidori.y = sasuke.y;
                    ramenGroup.destroyEach();
                    weaponGroup.destroyEach();
                    chidori.lifetime=45;
            }
            
            if (keyWentUp("enter")||keyWentUp("s")) {
                sasuke.addImage(sasukeImg2);
                sasuke.scale = 0.075;
                sasuke.setCollider("circle", -125, -150, 1000);
            }
            if (weaponGroup.isTouching(sasuke) || kakashiGroup.isTouching(sasuke)) {
                gameState = END;
            }

        }
        if (kakashiGroup.isTouching(attackGroup)) {
            kakashiGroup.destroyEach();
            attackGroup.destroyEach();
            points = points + 1;
        }
    }
    if (points === 9) {
        gameState = PLAY3;
    }
    if (points === 4) {
        if(character===1){
            newForm1.visible=true;
            newForm1.scale=0.5;
            newForm1.addImage(newFormImg);
            newForm1.depth=naruto.depth-3;
            if(gameState!==END){
            stroke(0); fill(225); textSize(30); text("NINE TAILS CHAKRA UNLOCKED", windowWidth / 2, 400);
            }
        }
        if(character===2){
            newForm2.visible=true;
            newForm2.scale = 0.5;
            newForm2.addImage(sasukeImg4);
            newForm2.depth = sasuke.depth - 3;
            if(gameState!==END){
            stroke(0); fill(225); textSize(30); text("MANGEKO SHARINGAN UNLOCKED", windowWidth / 2+200,400);
            }
        }
        newForm1.lifetime=50;
        newForm2.lifetime = 50;
    }
    if (gameState === PLAY3) {
        if(character===1){
            ramenGroup.destroyEach();
            kakashiGroup.destroyEach();
            weaponGroup.destroyEach();
            cloudsGroup.destroyEach();
            ground.destroy();
            attackGroup.destroyEach();
            enemyAttackGroup.destroyEach();
            enemyGroup.destroyEach();
            toBecont = createSprite(windowWidth/2,400,200,200);
            toBecont.scale=0.5;
            toBecont.scale = 0.5;
            toBecont.addImage(continueImg);

            background2 = createSprite(windowWidth / 2, height / 2, 100, 100);
            background2.addImage(backImg);
            background("FINAL.jpg");
            final2 = createSprite(windowWidth/2,height/2,100,100);
            final2.scale=0.5;
            final2.addImage(finalImg2);
            toBecont.depth=final2.depth+1;
        }
        if(character===2){
            ramenGroup.destroyEach();
            kakashiGroup.destroyEach();
            weaponGroup.destroyEach();
            cloudsGroup.destroyEach();
            ground.destroy();
            attackGroup.destroyEach();
            enemyAttackGroup.destroyEach();
            enemyGroup.destroyEach();
            toBecont = createSprite(windowWidth / 2,400, 200, 200);
            toBecont.scale = 0.5;
            toBecont.addImage(continueImg);

            background2 =createSprite(windowWidth/2,height/2,100,100);
            background2.addImage(backImg);
            final1 = createSprite(windowWidth / 2, height / 2, 100, 100);
            final1.scale = 0.5;
            final1.addImage(finalImg);

            toBecont.depth = final1.depth + 1;
        }
    }
    if (gameState === END) {
        naruto.destroy();
        sasuke.destroy();
        ramenGroup.destroyEach();
        kakashiGroup.destroyEach();
        weaponGroup.destroyEach();
        cloudsGroup.destroyEach();
        ground.destroy();
        attackGroup.destroyEach();
        enemyAttackGroup.destroyEach();
        enemyGroup.destroyEach();
        stroke(0); fill(225); textSize(30); text("GAME OVER", windowWidth / 2, height / 2);
        newForm1.destroy();
        newForm2.destroy();
    }

    drawSprites();
}

function movingBg() {
    if (gameState === PLAY2) {
        ground.velocityX = -10;
        if (ground.x < 1) {
            ground.x = windowWidth / 2;
        }
    }
}
function movingBg2() {
    if (gameState === PLAY2) {
        ground.velocityX = +10;
        if (ground.x > windowWidth) {
            ground.x = windowWidth / 2;
        }
    }
}
function spawnClouds() {
    if (frameCount % 60 === 0) {
        if (character === 1) {
            var cloud1 = createSprite(windowWidth - 10, 100, 50, 50);
            cloud1.velocityX = -10;
            //cloud1.addImage();
            //cloud1.scale=0.5;
            cloud1.lifetime = 200;
            cloud1.depth = naruto.depth - 1;
            cloud1.addImage(cloudImg);
            cloudsGroup.add(cloud1);
        }
        if (character === 2) {
            var cloud1 = createSprite(-10, 100, 50, 50);
            cloud1.velocityX = +10;
            //cloud1.addImage();
            //cloud1.scale=0.5;
            cloud1.lifetime = 200;
            cloud1.depth = sasuke.depth - 1;
            cloud1.addImage(cloudImg);
            cloudsGroup.add(cloud1);
        }


    }
}

function makeKakashi() {
    if (character === 1) {
        kakashi = createSprite(windowWidth + 90, 320, 100, 100);
        kakashi.velocityX = -10;
        kakashi.lifetime = 150;
    }
    if (character === 2) {
        kakashi = createSprite(-90, 280, 100, 100);
        kakashi.velocityX = +10;
        kakashi.lifetime = 150;
    }
    kakashi.addImage(kakashiImg);
    kakashiGroup.add(kakashi);
    kakashi.scale = 0.2;
    //kakashi.debug = true;
}
function makeWeapon() {
    if (character === 1) {
        weapon = createSprite(windowWidth + 90, 300, 100, 100);
        weapon.velocityX = -10;
        weapon.lifetime = 150;


        var rand = Math.round(random(1, 2));
        if (rand === 1) {
            weapon.addImage(shurikenImg);
            weapon.scale = 0.05;
        }
        if (rand === 2) {
            weapon.addImage(shurikenImg);
            weapon.scale = 0.05;
        }

    }
    if (character === 2) {
        weapon = createSprite(-90, 300, 100, 100);
        weapon.velocityX = +10;
        weapon.lifetime = 150;


        var rand = Math.round(random(1, 2));
        if (rand === 2) {
            weapon.addImage(shurikenImg);
            weapon.scale = 0.05;
        }
        if (rand === 1) {
            weapon.addImage(shurikenImg);
            weapon.scale = 0.05;
        }

    }
    weaponGroup.add(weapon);
}
function makeRamen() {
    if (character === 1) {
        ramen = createSprite(windowWidth + 90, 300, 100, 100);
        ramen.velocityX = -10;
        ramen.lifetime = 150;
    }
    if (character === 2) {
        ramen = createSprite(-90, 300, 100, 100);
        ramen.velocityX = +10;
        ramen.lifetime = 150;
    }
    ramen.addImage(ramenImg);
    ramen.scale = 0.2;
    ramenGroup.add(ramen);
}
function attack() {
    if (character === 1) {
        rasengan = createSprite(naruto.x + 10, naruto.y, 20, 20);
        //rasengan.addImage();
        rasengan.velocityX = 20;
        rasengan.lifetime = 200;
        attackGroup.add(rasengan);
        rasengan.addImage(rasenganImg);
        rasengan.scale = 0.1;
        
    }
    if (character === 2) {
        chidori = createSprite(sasuke.x - 10, sasuke.y, 20, 20);
        //rasengan.addImage();
        chidori.velocityX = -20;
        chidori.lifetime = 200;
        attackGroup.add(chidori);
        chidori.addImage(chidoriImg);
        chidori.scale = 0.1;
        chidori.debug=true;
        
    }
}
