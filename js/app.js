let currentLesson = 'lesson1';
let currentFlashcardIdx = 0;
let currentQuizIdx = 0;
let score = 0;

// Phát âm Tiếng Nhật (Text-to-Speech)
function speakJapanese(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt của bạn không hỗ trợ tính năng phát âm!");
  }
}

// Chuyển bài học
function selectLesson(lessonKey) {
  currentLesson = lessonKey;
  document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`btn-${lessonKey}`);
  if (btn) btn.classList.add('active');
  
  currentFlashcardIdx = 0;
  currentQuizIdx = 0;
  score = 0;

  renderCurrentTab();
}

// Quản lý Tab hiển thị
let activeTab = 'flashcard';
function switchTab(tabName) {
  activeTab = tabName;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const tabBtn = document.getElementById(`tab-${tabName}`);
  if (tabBtn) tabBtn.classList.add('active');
  renderCurrentTab();
}

function renderCurrentTab() {
  const container = document.getElementById('tabContent');
  if (!container) return;
  const lesson = minnaData[currentLesson];

  if (!lesson) {
    container.innerHTML = `<div style="text-align:center; padding:2rem;">Dữ liệu bài học đang được cập nhật!</div>`;
    return;
  }

  if (activeTab === 'flashcard') {
    renderFlashcard(container, lesson);
  } else if (activeTab === 'grammar') {
    renderGrammar(container, lesson);
  } else if (activeTab === 'dialogue') {
    renderDialogue(container, lesson);
  } else if (activeTab === 'fill') {
    renderFillBlanks(container, lesson);
  } else if (activeTab === 'quiz') {
    renderQuiz(container, lesson);
  }
}

// 1. Render Flashcard
function renderFlashcard(container, lesson) {
  if (!lesson.vocab || lesson.vocab.length === 0) {
    container.innerHTML = `<div style="text-align:center;">Chưa có từ vựng cho bài học này.</div>`;
    return;
  }

  const item = lesson.vocab[currentFlashcardIdx];
  container.innerHTML = `
    <div class="flashcard-wrapper" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
      <div class="flashcard">
        <div class="card-front">
          <div class="jp-text">${item.jp}</div>
          <div class="romaji-text">${item.romaji}</div>
          <button class="speaker-btn" onclick="event.stopPropagation(); speakJapanese('${item.jp}')">🔊</button>
        </div>
        <div class="card-back">
          <h2>${item.vi}</h2>
        </div>
      </div>
    </div>
    <div style="text-align: center; margin-top: 1rem;">
      <button class="btn-primary" style="width: auto; padding: 0.5rem 1.5rem;" onclick="prevCard()">⬅️ Trước</button>
      <span style="margin: 0 15px; font-weight: bold;">${currentFlashcardIdx + 1} / ${lesson.vocab.length}</span>
      <button class="btn-primary" style="width: auto; padding: 0.5rem 1.5rem;" onclick="nextCard()">Sau ➡️</button>
    </div>
  `;
}

function nextCard() {
  const vocab = minnaData[currentLesson].vocab;
  if (!vocab || vocab.length === 0) return;
  currentFlashcardIdx = (currentFlashcardIdx + 1) % vocab.length;
  renderCurrentTab();
}

function prevCard() {
  const vocab = minnaData[currentLesson].vocab;
  if (!vocab || vocab.length === 0) return;
  currentFlashcardIdx = (currentFlashcardIdx - 1 + vocab.length) % vocab.length;
  renderCurrentTab();
}

// 2. Render Ngữ pháp
function renderGrammar(container, lesson) {
  if (!lesson.grammar || lesson.grammar.length === 0) {
    container.innerHTML = `<div class="quiz-card"><h3>📚 Cấu trúc ngữ pháp</h3><p style="margin-top:1rem;">Nội dung đang cập nhật...</p></div>`;
    return;
  }

  let html = `<div class="quiz-card"><h3>📚 Cấu trúc ngữ pháp</h3><br>`;
  lesson.grammar.forEach(g => {
    html += `
      <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #eee; padding-bottom: 1rem;">
        <h4 style="color: var(--primary);">${g.pattern}</h4>
        <p><b>Ý nghĩa:</b> ${g.meaning}</p>
        <p><b>Ví dụ:</b> ${g.example} <button class="speaker-btn" style="width:28px; height:28px; font-size:0.8rem;" onclick="speakJapanese('${g.example}')">🔊</button></p>
        <p style="color: var(--text-muted);">${g.exampleVi}</p>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// 3. Render Hội thoại
function renderDialogue(container, lesson) {
  if (!lesson.dialogue || lesson.dialogue.length === 0) {
    container.innerHTML = `<div class="quiz-card" style="text-align:center;"><h3>💬 Bài hội thoại</h3><p style="margin-top:1rem;">Bài học này chưa có dữ liệu hội thoại.</p></div>`;
    return;
  }

  let html = `<div style="max-width: 600px; margin: 0 auto;">`;
  lesson.dialogue.forEach(d => {
    html += `
      <div class="dialogue-item">
        <div style="font-weight: bold; color: var(--primary);">Người ${d.speaker}:</div>
        <div class="jp-text" style="font-size: 1.3rem;">${d.jp} 
          <button class="speaker-btn" style="width:30px; height:30px; font-size:0.9rem;" onclick="speakJapanese('${d.jp}')">🔊</button>
        </div>
        <div class="romaji-text">${d.romaji}</div>
        <div style="margin-top: 5px;">👉 ${d.vi}</div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// 4. Render Đục lỗ
function renderFillBlanks(container, lesson) {
  if (!lesson.fillBlanks || lesson.fillBlanks.length === 0) {
    container.innerHTML = `<div class="quiz-card"><h3>✏️ Bài tập điền từ vào chỗ trống</h3><p style="margin-top:1rem;">Nội dung đang cập nhật...</p></div>`;
    return;
  }

  let html = `<div class="quiz-card"><h3>✏️ Bài tập điền từ vào chỗ trống</h3><br>`;
  lesson.fillBlanks.forEach((item, idx) => {
    html += `
      <div style="margin-bottom: 1.5rem;">
        <p><b>Câu ${idx + 1}:</b> ${item.question.replace('[blank]', '_____')}</p>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
          ${item.options.map(opt => `
            <button class="option-btn" style="width: auto; padding: 0.5rem 1rem;" onclick="checkFill(this, '${opt}', '${item.answer}')">${opt}</button>
          `).join('')}
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function checkFill(btn, selected, correct) {
  if (selected === correct) {
    btn.style.background = '#dcfce7';
    btn.style.borderColor = 'green';
  } else {
    btn.style.background = '#fee2e2';
    btn.style.borderColor = 'red';
  }
}

// 5. Render Quiz
function renderQuiz(container, lesson) {
  const quizList = lesson.quiz;
  if (!quizList || quizList.length === 0) {
    container.innerHTML = `<div class="quiz-card"><h3>❓ Bài tập Quiz</h3><p style="margin-top:1rem;">Nội dung đang cập nhật...</p></div>`;
    return;
  }

  if (currentQuizIdx >= quizList.length) {
    container.innerHTML = `
      <div class="quiz-card" style="text-align: center;">
        <h2> 🎉 Hoàn thành bài Quiz!</h2>
        <p style="font-size: 1.5rem; margin: 1rem 0;">Điểm số: ${score} / ${quizList.length}</p>
        <button class="btn-primary" style="width: auto;" onclick="currentQuizIdx=0; score=0; renderCurrentTab();">Làm lại</button>
      </div>
    `;
    return;
  }

  const q = quizList[currentQuizIdx];
  let html = `
    <div class="quiz-card">
      <p style="color: var(--text-muted);">Câu ${currentQuizIdx + 1} / ${quizList.length}</p>
      <h3 style="margin: 1rem 0;">${q.q}</h3>
      <div>
        ${q.options.map((opt, idx) => `
          <button class="option-btn" onclick="answerQuiz(${idx}, ${q.a})">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function answerQuiz(selected, correct) {
  if (selected === correct) score++;
  currentQuizIdx++;
  renderCurrentTab();
}

// Khởi chạy mặc định khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
  renderCurrentTab();
});
